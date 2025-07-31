import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";

type Props = {
  title?: string;
  description?: string;
};

const Seo = ({ title, description }: Props) => {
  const site = "https://fbayram.com";
  const router = useRouter();
  let canonicalURL = "";
  let path = "";
  if (router.asPath.slice(-1) === "/") {
    path = router.asPath.slice(0, -1);
  } else {
    path = router.asPath;
  }
  canonicalURL = site + path;
  title = title || "Furkan Bayram";
  description = description || "I'm a designer and developer from Turkey. ";
  return (
    <NextSeo
      title={title + " | Furkan Bayram"}
      description={description}
      canonical={canonicalURL}
      openGraph={{
        url: canonicalURL,
        title: title,
        description: description,
        images: [{ url: "https://fbayram.com/assets/fbayram-og.png" }],
        site_name: "alllinkone",
      }}
      twitter={{
        handle: "@furkanbayram0",
        site: "@furkanbayram0",
        cardType: "summary_large_image",
      }}
    />
  );
};

export default Seo;
