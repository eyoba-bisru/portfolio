import SocialLink from "@/components/social-link";
import Image from "next/image";
import home from "../data/home.json";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="xs:max-w-2xl lg:max-w-4xl mx-auto sm:px-4 xs:px-2">
        <header className="flex justify-between items-center mt-5" id="#home">
          <div className="w-8 h-8 relative">
            <Image
              src="/eyob-logo.png"
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
          <div className="mx-auto flex flex-col justify-start mt-20 items-center xs:max-w-lg lg:max-w-xl h-[calc(100vh-10rem)]">
            <h1 className="font-extrabold text-4xl">{home["title"]}</h1>
            <h2 className="mt-10 font-bold text-2xl bg-black text-white">
              {home["greet"]}
            </h2>
            <p
              className="mt-8 text-md text-center text-gray-700"
              dangerouslySetInnerHTML={{ __html: home["description"] }}
            />
            <div className="mt-20 flex items-center gap-8">
              <a
                download
                href="/docs/resume.pdf"
                className={buttonVariants({ variant: "default" })}
              >
                Download resume
              </a>
              <a
                href="#works"
                className={buttonVariants({ variant: "outline" })}
              >
                Check my work
              </a>
            </div>
          </div>
          {/* <div className="mt-10 text-3xl font-extrabold h-[100vh]" id="skills">
            <header className="text-center">Skills</header>
          </div> */}
        </main>
      </div>
    </div>
  );
}
