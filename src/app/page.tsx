"use client";

import Navbar from "@/components/nav-bar";
import Intro from "@/components/pages/intro";
import Skills from "@/components/pages/skills";
import Works from "@/components/pages/works";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
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
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <div className="max-w-xl lg:max-w-3xl mx-auto sm:px-4 xs:px-2 border relative">
        {showTopBtn && (
          <div
            onClick={goToTop}
            className="fixed z-20 bottom-[20px] right-[25px] h-12 w-12 text-white cursor-pointer"
          >
            <div className="w-8 h-8 relative">
              <Image
                className="object-cover"
                fill
                src="/icons/arrow.svg"
                alt="back to top"
              />
            </div>
          </div>
        )}
        <Navbar />
        <main>
          <Intro />
          <Skills />
          <Works />
        </main>
        <footer>
          <p className="text-right">
            &copy;{new Date().getFullYear().toString()} Eyob Abebe
          </p>
        </footer>
      </div>
    </div>
  );
}
