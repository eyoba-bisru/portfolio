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

      <div className="flex items-center gap-2">
        {links.map((link) => (
          <SocialLink key={link.img} image={link.img} link={link.link} />
        ))}
      </div>
    </nav>
  );
}
