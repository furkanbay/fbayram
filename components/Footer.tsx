import {
  Twitter,
  Instagram,
  Behance,
  Linkedin,
  Github,
  Resume,
} from "./SVG/Social";
const Footer = () => {
  const links = [
    {
      id: 0,
      name: "Twitter",
      url: "https://twitter.com/furkanbayram0",
      icon: <Twitter />,
    },
    {
      id: 1,
      name: "Instagram",
      url: "#",
      icon: <Instagram />,
    },
    {
      id: 2,
      name: "Behance",
      url: "https://www.behance.net/furkanbay",
      icon: <Behance />,
    },
    {
      id: 3,
      name: "Linkedin",
      url: "https://linkedin.com/in/furkanbayram0",
      icon: <Linkedin />,
    },
    {
      id: 4,
      name: "Github",
      url: "https://github.com/furkanbay",
      icon: <Github />,
    },
    {
      id: 5,
      name: "Resume",
      url: "/Furkan_Bayram_Resume.pdf",
      icon: <Resume />,
    },
  ];
  return (
    <div className="flex flex-col md:flex-row justify-center gap-2 ">
      {links.map((link) => (
        <a
          href={link.url}
          target={link.url === "#" ? "_self" : "_blank"}
          onClick={() => link.url === "#" && alert("Not available")}
          key={link.id}
          className="flex flex-col items-center text-gray-500 hover:text-gray-200 py-2 px-4 bg-primary-dark transition-all duration-300 transform md:-translate-y-1/2 md:hover:translate-y-0"
          rel="noreferrer"
        >
          {link.icon}
          {link.name}
        </a>
      ))}
    </div>
  );
};

export default Footer;
