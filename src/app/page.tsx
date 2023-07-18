import Navbar from "@/components/nav-bar";
import Intro from "@/components/pages/intro";
import Skills from "@/components/pages/skills";

export default function Home() {
  return (
    <div>
      <div className="max-w-xl lg:max-w-3xl mx-auto sm:px-4 xs:px-2 border">
        <Navbar />
        <main>
          <Intro />
          <Skills />
        </main>
      </div>
    </div>
  );
}
