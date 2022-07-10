import type { NextPage } from "next";
import Seo from "../components/Seo";
import Logo from "../components/SVG/Logo";

const Home: NextPage = () => {
  return (
    <>
      <Seo />
      <div
        className="min-h-screen w-full bg-cover bg-center flex items-center justify-center p-4"
        style={{ backgroundImage: "url('/assets/bg.svg')" }}
      >
        <div className="mt-32 text-lg md:text-xl lg:text-3xl font-serif text-primary uppercase flex flex-col items-center gap-10 tracking-[.5em] md:tracking-[1em] lg:tracking-[1.5em]">
          <Logo />
          FurkanBayram
        </div>
      </div>
    </>
  );
};

export default Home;
