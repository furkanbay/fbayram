import type { NextPage } from "next";
import Layout from "@components/Layout";

const About: NextPage = () => {
  return (
    <Layout title="About">
      <div className="mb-auto my-4 text-gray-500">
        <ul>
          <li>Hi, I&apos;m Furkan.</li>
          <li>
            Fulltime freelancer with a passion for design and development.
          </li>
          <li>I love to design and develop websites.</li>
          <li>
            Graduated from Hacettepe University with a Bachelor of Science in
            Business Administration in 2021.
          </li>
          <li>Worked as a Front-End Developer at Popupsmart in 2020-2022.</li>
          <li>
            In 2015 built a marketplace called &quot;Notlarim&quot; for
            university students to buy and sell their lecture notes.
          </li>
          <li></li>
        </ul>
      </div>
    </Layout>
  );
};

export default About;
