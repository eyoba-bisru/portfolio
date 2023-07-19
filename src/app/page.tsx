import GotoTop from "@/components/goto-top";
import Navbar from "@/components/nav-bar";
import Intro from "@/components/pages/intro";
import Skills from "@/components/pages/skills";
import Works from "@/components/pages/works";

export default function Home() {
  return (
    <div>
      <div className="max-w-xl lg:max-w-3xl mx-auto sm:px-4 xs:px-2 border relative">
        <GotoTop />
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
