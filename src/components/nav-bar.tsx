"use client";

import Image from "next/image";
import SocialLink from "./social-link";
import links from "../data/links.json";
import { ModeToggle } from "./mode-toggle";
import { useTheme } from "next-themes";

export default function Navbar() {
  const { theme } = useTheme();

  return (
    <nav className="flex justify-between items-center mt-5" id="#home">
      <div className="w-8 h-8 relative">
        <Image
          src={
            theme === "light"
              ? "/images/eyob-logo.svg"
              : "/images/eyob-logo-light.svg"
          }
          alt="logo"
          className="object-cover"
          fill
        />
      </div>

      <div className="flex items-center gap-4 font-semibold text-sm">
        <a href="#skills">Skills</a>
        <a href="#works">Works</a>
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          {links.map((link) => (
            <SocialLink
              key={link.img}
              image={theme === "light" ? link.img : link["img-dark"]}
              link={link.link}
            />
          ))}
        </div>
        <ModeToggle />
      </div>
    </nav>
  );
}
