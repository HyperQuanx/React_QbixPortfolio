import { createContext } from "react";

export const fontOptions = [
  { value: "galmuri", label: "Galmuri11" },
  { value: "noto", label: "Noto Sans KR" },
  { value: "malgun", label: "맑은 고딕" },
];

export const FontPreferenceContext = createContext(null);

export const readFontPreference = () => {
  try {
    const saved = localStorage.getItem("portfolio-font");
    return fontOptions.some((option) => option.value === saved) ? saved : "galmuri";
  } catch {
    return "galmuri";
  }
};
