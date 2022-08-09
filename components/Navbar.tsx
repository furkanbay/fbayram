import { useRouter } from "next/router";
import Link from "next/link";
import { Home, About, Article, Project, Collection } from "./SVG/Navbar";

const Navbar = () => {
  const router = useRouter();
  const { pathname } = router;

  const menu = [
    {
      id: 0,
      name: "Home",
      url: "/",
      icon: <Home />,
    },
    {
      id: 1,
      name: "About",
      url: "/about",
      icon: <About />,
    },
    {
      id: 2,
      name: "Article",
      url: "/article",
      icon: <Article />,
    },
    {
      id: 3,
      name: "Project",
      url: "/project",
      icon: <Project />,
    },
    {
      id: 4,
      name: "Collection",
      url: "/collection",
      icon: <Collection />,
    },
  ];

  return (
    <div className="flex gap-4">
      {menu.map((item) => (
        <Link href={item.url} key={item.id}>
          <a
            className={`flex items-center gap-2 px-4 py-2 bg-[#333] rounded-md  ${
              item.url === pathname
                ? "text-white bg-gray-700"
                : "text-gray-400 hover:text-gray-100"
            }`}
          >
            {item.icon}
            {item.name}
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
