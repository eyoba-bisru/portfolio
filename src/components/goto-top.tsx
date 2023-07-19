"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
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
          <div className="w-8 h-8 relative">
            <Image
              className="object-cover"
              src={
                theme === "light"
                  ? "/icons/arrow.svg"
                  : "/icons/arrow-light.svg"
              }
              fill
              alt="back to top"
            />
          </div>
        </div>
      )}
    </div>
  );
}
