"use client";

import { useSubscriptionStore } from "@/store/store";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

function UpgradeBanner() {
  const subscription = useSubscriptionStore((state) => state.subscription);
  const isPro = subscription?.role === "pro";
  const router = useRouter();

  if (subscription === undefined || isPro) return null;

  return (
    <Button
      className="w-full rounded-none bg-gradient-to-r from-[#7775d6] to-[#1e5eec] text-center text-white px-5 py-2 hover:from-[#7775d6] hover:to-[#1e5eec] hover:shadow-md hover:opacity-75 transition-all"
      onClick={() => router.push("/register")}
    >
      Upgrade to PRO to unlock all features!
    </Button>
  );
}

export default UpgradeBanner;
