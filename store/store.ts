import { create } from "zustand";
import { Subscription } from "@/types/Subscription";

export type LanguagesSupported =
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

export const LanguagesSupportedMap: Record<LanguagesSupported, string> = {
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

const LANGUAGES_FREE_IN_BASIC = 3;

interface LanguageState {
  language: LanguagesSupported;
  setLanguage: (language: LanguagesSupported) => void;
  getLanguages: (isPro: boolean) => LanguagesSupported[];
  getNotSupportedLanguages: (isPro: boolean) => LanguagesSupported[];
}

export const useLanguageStore = create<LanguageState>()((set, get) => ({
  language: "en",
  setLanguage: (language: LanguagesSupported) => set({ language }),
  getLanguages: (isPro: boolean) => {
    if (isPro)
      return Object.keys(LanguagesSupportedMap) as LanguagesSupported[];

    return Object.keys(LanguagesSupportedMap).slice(
      0,
      LANGUAGES_FREE_IN_BASIC
    ) as LanguagesSupported[];
  },
  getNotSupportedLanguages: (isPro: boolean) => {
    if (isPro) return [];

    return Object.keys(LanguagesSupportedMap).slice(
      LANGUAGES_FREE_IN_BASIC
    ) as LanguagesSupported[];
  },
}));

interface SubscriptionState {
  subscription: Subscription | null | undefined;
  setSubsription: (subscription: Subscription | null) => void;
}

export const useSubscriptionStore = create<SubscriptionState>((set) => ({
  subscription: undefined,
  setSubsription: (subscription: Subscription | null) => set({ subscription }),
}));
