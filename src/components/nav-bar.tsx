import Image from "next/image";
import SocialLink from "./social-link";
import links from "../data/links.json";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center mt-5" id="#home">
      <div className="w-8 h-8 relative">
        <Image
          src="/images/eyob-logo.png"
          alt="logo"
          className="object-cover"
          fill
        />
      </div>

      <div className="flex items-center gap-4 font-semibold text-sm">
        <a href="#skills">Skills</a>
        <a href="#works">Works</a>
      </div>

<<<<<<< HEAD
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
=======
      <div className="flex items-center gap-2">
        {links.map((link) => (
          <SocialLink image={link.img} link={link.link} />
        ))}
>>>>>>> parent of 77d787c (dark mode added)
      </div>
    </nav>
  );
}
