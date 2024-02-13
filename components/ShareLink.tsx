"use client";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Dispatch, SetStateAction } from "react";
import { useToast } from "./ui/use-toast";
import { Button } from "./ui/button";
import { Copy } from "lucide-react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

function ShareLink({
  isOpen,
  setIsOpen,
  chatId,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  chatId: string;
}) {
  const { toast } = useToast();
  const host = window.location.host;

  const linkToChat =
    process.env.NODE_ENV === "development"
      ? `http://${host}/chat/${chatId}`
      : `https://${host}/chat/${chatId}`;

  async function copyToClipboard() {
    try {
      await navigator.clipboard.writeText(linkToChat);
      console.log("Text copied to clipboard");

      toast({
        title: "Copied Successfully",
        description:
          "Share this to the person you want to chat with! (NOTE: They must be addedd to the chat to access it!)",
        className: "bg-green-600 text-white",
      });
    } catch (err) {
      console.error("Failed to copy text ", err);
    }
  }

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => setIsOpen(open)}
      defaultOpen={isOpen}
    >
      <DialogTrigger asChild>
        <Button variant={"outline"}>
          <Copy className="mr-2" />
          Share Link
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Share link</DialogTitle>
          <DialogDescription>
            Any user who has been{" "}
            <span className="text-blue-600 font-bold">granted access</span> can
            use this link.
          </DialogDescription>
        </DialogHeader>

        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
              Link
            </Label>
            <Input id="link" defaultValue={linkToChat} readOnly />
          </div>
          <Button
            type="submit"
            onClick={() => copyToClipboard()}
            size={"sm"}
            className="px-3"
          >
            <span className="sr-only">Copy</span>
            <Copy className="h-4 w-4" />
          </Button>
        </div>

        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant={"secondary"}>
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default ShareLink;
