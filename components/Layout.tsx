import Seo from "@components/Seo";
import Footer from "@components/Footer";
import Navbar from "@components/Navbar";
import Logo from "./SVG/Logo";

type Props = {
  children?: React.ReactNode;
  title?: string;
  description?: string;
};

const Layout = ({ children, title, description }: Props) => {
  return (
    <>
      <Seo title={title} description={description} />
      <div className="min-h-screen w-full bg-cover bg-center flex items-center justify-center p-4 bg-[url('/assets/bg.svg')]">
        <div className="max-w-4xl w-full mx-auto">
          <div className="relative z-10 text-center  text-lg md:text-xl lg:text-3xl font-serif text-primary uppercase flex flex-col items-center gap-10 tracking-[.5em] md:tracking-[1em] lg:tracking-[1.5em]">
            <Logo />
            FurkanBayram
          </div>
          <div className="relative z-20 -mt-2 bg-primary-dark text-white shadow-2xl min-h-[650px] grid grid-cols-[25px_1fr_25px] md:grid-cols-[50px_1fr_50px]">
            <div className="border-r border-gray-600 flex flex-col justify-between">
              <span className="border-t border-b border-gray-600 w-full h-10 box-content block mt-12"></span>
              <span className="bg-gray-600 w-full h-px block mt-auto mb-16"></span>
            </div>
            <div className="border-t border-gray-600 mt-12 flex flex-col justify-between overflow-hidden">
              <div className="border-b border-gray-600 overflow-x-auto">
                <Navbar />
              </div>
              {children}
              <div className="border-t border-gray-600 h-16 box-content flex justify-between">
                <div className="border-r border-gray-600 flex flex-col justify-center px-2">
                  <span className="uppercase text-[10px] mb-1 text-gray-500">Available For</span>
                  <p className="flex items-center gap-2 bg-gray-800 rounded-xl px-4 py-px text-[14px] text-green-500">
                    <span className="bg-green-500 w-3 h-3 block rounded-full"></span>
                    Freelance
                  </p>
                </div>
                <div className="border-l border-gray-600 flex items-center px-2">
                  <a
                    className="text-gray-500 hover:text-gray-300"
                    href="mailto:me@fbayram.com"
                  >
                    me@fbayram.com
                  </a>
                </div>
              </div>
            </div>
            <div className="border-l border-gray-600 flex flex-col justify-between">
              <span className="border-t border-b border-gray-600 w-full h-10 box-content block mt-12"></span>
              <span className="bg-gray-600 w-full h-px block mt-auto mb-16"></span>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
