"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function GotoTop() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  return (
    <div className="relative">
      {showTopBtn && (
        <a
          href="#"
          className="fixed z-20 bottom-[20px] right-[25px] h-12 w-12 cursor-pointer"
        >
          <div className="w-12 h-12 relative">
            <Image
              className="object-cover"
              src="/icons/arrow.svg"
              fill
              alt="back to top"
            />
          </div>
        </a>
      )}
    </div>
  );
}
