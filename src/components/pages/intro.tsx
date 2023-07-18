import home from "../../data/home.json";
import { buttonVariants } from "../ui/button";
export default function Intro() {
  return (
    <div className="mx-auto flex flex-col justify-start mt-20 items-center max-w-lg lg:max-w-xl h-[calc(100vh-10rem)]">
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
        <a href="#works" className={buttonVariants({ variant: "outline" })}>
          Check my work
        </a>
      </div>
    </div>
  );
}
