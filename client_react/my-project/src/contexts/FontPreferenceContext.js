import { createContext } from "react";

export const fontOptions = [
  { value: "galmuri", label: "Galmuri11" },
  { value: "noto", label: "Noto Sans KR" },
  { value: "gowun", label: "고운돋움" },
];

export const FontPreferenceContext = createContext(null);

export const readFontPreference = () => {
  try {
    const saved = localStorage.getItem("portfolio-font");
    if (saved === "malgun") return "gowun";
    return fontOptions.some((option) => option.value === saved) ? saved : "galmuri";
  } catch {
    return "galmuri";
  }
};
