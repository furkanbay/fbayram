import type { NextPage } from "next";
import Image from "@components/Image";

import Layout from "@components/Layout";

const Home: NextPage = () => {
  return (
    <Layout title="Home">
      <div className="grid md:grid-cols-2 items-center gap-12 py-12">
        <div className="order-2 md:order-1">
          <h1 className="text-2xl">Hey 👋</h1>
          <p className="text-gray-500 mt-4">
            I&apos;m a designer and developer from Turkey. I love being in the
            outdoors; hiking and travelling are some of the things I do to clear
            my mind and relax.
          </p>
          <p className="text-gray-500 mt-4">
            Being able to both design and develop is a lot of fun. When you have
            an idea, there&apos;s nothing holding you back from building it.
          </p>
        </div>
        <div className="order-1 md:order-2">
          <Image
            width={289}
            height={292}
            src="/assets/furkan-bayram.png"
            alt="furkan bayram"
            layout="responsive"
          />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
