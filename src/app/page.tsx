import SocialLink from "@/components/social-link";
import Image from "next/image";
import Link from "next/link";
import home from "../data/home.json";

export default function Home() {
  return (
    <div>
      <div className="xs:max-w-2xl lg:max-w-4xl mx-auto sm:px-4 xs:px-2">
        <header className="flex justify-between items-center mt-5" id="#home">
          <div className="w-12 h-12 relative">
            <Image
              src="/eyob-logo.png"
              alt="logo"
              className="object-cover"
              fill
            />
          </div>

          <div className="flex items-center gap-4 font-semibold">
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
        </header>
        <main>
          <div className="mx-auto flex flex-col justify-center items-center xs:max-w-lg lg:max-w-xl mt-12">
            <h1 className="font-extrabold text-5xl">{home["title"]}</h1>
            <h2 className="mt-8 font-bold text-3xl bg-black text-white">
              {home["greet"]}
            </h2>
            <p
              className="mt-4 text-lg text-center"
              dangerouslySetInnerHTML={{ __html: home["description"] }}
            />
          </div>
        </main>
      </div>
    </div>
  );
}
