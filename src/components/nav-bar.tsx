import Image from "next/image";
import SocialLink from "./social-link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center mt-5" id="#home">
      <div className="w-8 h-8 relative">
        <Image src="/eyob-logo.png" alt="logo" className="object-cover" fill />
      </div>

      <div className="flex items-center gap-4 font-semibold text-sm">
        <a href="#skills">Skills</a>
        <a href="#works">Works</a>
      </div>

      <div className="flex items-center gap-2">
        <SocialLink
          image="/icons/telegram.svg"
          link="https://t.me/eyoba_bisru"
        />
        <SocialLink
          image="/icons/linkedin.png"
          link="https://www.linkedin.com/in/eyob-abebe-8327b71a1/"
        />
        <SocialLink
          image="/icons/github.svg"
          link="https://github.com/eyoba-bisru"
        />
      </div>
    </nav>
  );
}
