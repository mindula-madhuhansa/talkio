"use client";

import { MessageSquarePlusIcon } from "lucide-react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { useSubscriptionStore } from "@/store/store";
import { useToast } from "./ui/use-toast";
import LoadingSpinner from "./LoadingSpinner";
import { v4 as uuidv4 } from "uuid";
import { serverTimestamp, setDoc } from "firebase/firestore";
import { addChatRef } from "@/lib/converters/ChatMembers";

function CreateChatButton({ isLarge }: { isLarge?: boolean }) {
  const { data: session } = useSession();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const subscription = useSubscriptionStore((state) => state.subscription);

  const createNewChat = async () => {
    if (!session?.user.id) return;

    setLoading(true);
    toast({
      title: "Creating new chat...",
      description: "Wait a moment while we create your new chat room...",
      duration: 3000,
    });

    // TODO check if user is pro and limit them creating a new chat

    const chatId = uuidv4();

    await setDoc(addChatRef(chatId, session.user.id), {
      userId: session.user.id,
      email: session.user.email!,
      timestamp: serverTimestamp(),
      isAdmin: true,
      chatId: chatId,
      image: session.user.image || "",
    })
      .then(() => {
        toast({
          title: "Success",
          description: "Your chat room has been created!",
          className: "bg-green-600 text-white",
          duration: 2000,
        });
        router.push(`/chat/${chatId}`);
      })
      .catch((error) => {
        toast({
          title: "Error",
          description: "There was an error creating your chat room!",
          variant: "destructive",
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  if (isLarge) {
    return (
      <div>
        <Button variant={"default"} onClick={createNewChat}>
          {loading ? <LoadingSpinner /> : "Create a New Chat"}
        </Button>
      </div>
    );
  }

  return (
    <Button variant={"ghost"} onClick={createNewChat}>
      <MessageSquarePlusIcon />
    </Button>
  );
}

export default CreateChatButton;
