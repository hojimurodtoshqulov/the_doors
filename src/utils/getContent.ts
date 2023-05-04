import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { useMemo } from "react";

export const useTarjima = () => {
  const { locale } = useRouter();
  return (ru?: string, uz?: string) => (locale === "ru" ? ru : uz);
};
