import { useEffect, useLayoutEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/layout/Main";
import InitialLoading from "./components/common/InitialLoading";
import { PortfolioContent } from "./assets/css/common/InitialLoading.styles";

import { FontPreferenceContext, readFontPreference } from "./contexts/FontPreferenceContext";

const App = () => {
  const [font, setFont] = useState(readFontPreference);

  useLayoutEffect(() => {
    document.documentElement.dataset.font = font;
    try {
      localStorage.setItem("portfolio-font", font);
    } catch {
      // Keep the switch usable when browser storage is unavailable.
    }
  }, [font]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!isLoading) return;

    const elements = [document.documentElement, document.body];
    const previousOverflow = elements.map((element) => ({
      value: element.style.getPropertyValue("overflow"),
      priority: element.style.getPropertyPriority("overflow"),
    }));
    elements.forEach((element) => element.style.setProperty("overflow", "hidden"));
    const timer = window.setTimeout(() => setIsLoading(false), 2500);

    return () => {
      window.clearTimeout(timer);
      elements.forEach((element, index) => {
        const { value, priority } = previousOverflow[index];
        if (value) element.style.setProperty("overflow", value, priority);
        else element.style.removeProperty("overflow");
      });
    };
  }, [isLoading]);

  return (
    <FontPreferenceContext.Provider value={{ font, setFont }}>
      {isLoading && <InitialLoading />}
      <PortfolioContent inert={isLoading} aria-hidden={isLoading ? true : undefined}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
          </Routes>
        </BrowserRouter>
      </PortfolioContent>
    </FontPreferenceContext.Provider>
  );
};

export default App;
