import { create } from "zustand";
import { Subscription } from "@/types/Subscription";

export type LanguageSupported =
  | "en"
  | "si"
  | "ta"
  | "ko"
  | "ja"
  | "zh"
  | "es"
  | "de"
  | "fr"
  | "ru";

export const languageSupportedMap: Record<LanguageSupported, string> = {
  en: "English",
  si: "Sinhala",
  ta: "Tamil",
  ko: "Korean",
  ja: "Japanese",
  zh: "Mandarin",
  es: "Spanish",
  de: "German",
  fr: "French",
  ru: "Russian",
};

interface SubscriptionState {
  subscription: Subscription | null | undefined;
  setSubsription: (subscription: Subscription | null) => void;
}

export const useSubscriptionStore = create<SubscriptionState>((set) => ({
  subscription: undefined,
  setSubsription: (subscription: Subscription | null) => set({ subscription }),
}));
