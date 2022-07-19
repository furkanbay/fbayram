import type { NextPage } from "next";
import Image from "@components/Image";

import Layout from "@components/Layout";

const Home: NextPage = () => {
  return (
    <Layout title="Home">
      <div className="grid grid-cols-2 items-center gap-12 py-12">
        <div className="">
          <h1 className="text-2xl">Hey 👋</h1>
          <p className="text-gray-500 mt-4 indent-8">
            I&apos;m a designer and developer from Turkey. I love being in the
            outdoors; hiking and travelling are some of the things I do to clear
            my mind and relax.
          </p>
          <p className="text-gray-500 mt-4 indent-8">
            Being able to both design and develop is a lot of fun. When you have
            an idea, there&apos;s nothing holding you back from building it.
          </p>
        </div>
        <Image
          width={289}
          height={292}
          src="/assets/furkan-bayram.png"
          alt="furkan bayram"
          layout="responsive"
        />
      </div>
    </Layout>
  );
};

export default Home;
