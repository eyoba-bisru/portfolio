"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function GotoTop() {
  const [showTopBtn, setShowTopBtn] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative">
      {showTopBtn && (
        <div
          onClick={goToTop}
          className="fixed z-20 bottom-[20px] right-[25px] h-12 w-12 cursor-pointer"
        >
          <img
            src={
              theme === "light" ? "/icons/arrow.svg" : "/icons/arrow-light.svg"
            }
            alt="back to top"
          />
        </div>
      )}
    </div>
  );
}
