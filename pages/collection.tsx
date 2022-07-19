import type { NextPage } from "next";
import { useState } from "react";
import Layout from "@components/Layout";
import ExternalLink from "@components/SVG/ExternalLink";

type Props = {
  data: Array<{
    id: string;
    fields: {
      Name: string;
      Url: string;
      Category: string;
    };
  }>;
  categories: Array<string>;
};

const Collection: NextPage<Props> = ({ data, categories }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <Layout title="Collection">
      <div className="mb-auto my-4 text-gray-500">
        <p className="italic">
          Things I like while surfing the web and I think you will like it too.
        </p>
        <div className="flex gap-4 mt-4">
          {categories.map((i, index) => (
            <div
              key={index}
              onClick={() => setSelectedCategory(i)}
              className={`${
                selectedCategory === i ? "text-gray-200" : "text-gray-500 hover:text-gray-300"
              } px-4 py-2 rounded-md cursor-pointer`}
            >
              {i}
            </div>
          ))}
        </div>
        <ul className="mt-4 list-disc ml-8">
          {data
            .filter(
              (d) =>
                selectedCategory === "All" ||
                d.fields.Category === selectedCategory
            )
            .map((i) => (
              <li key={i.id}>
                <a
                  href={i.fields.Url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex gap-2 transition-all hover:gap-4 items-center hover:text-gray-100"
                >
                  {i.fields.Name}
                  <ExternalLink />
                </a>
              </li>
            ))}
        </ul>
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  const res = await fetch(`${process.env.API_URL}/api/airtable-collection`);
  const data = await res.json();
  let categories: any[] = ["All"];
  const minifiedData = data.records.map(
    (item: {
      fields: {
        Name: string;
        Url: string;
        Category: string;
      };
      id: any;
    }) => {
      categories.push(item.fields.Category);
      return {
        id: item.id,
        fields: item.fields,
      };
    }
  );
  return {
    props: { data: minifiedData, categories },
    revalidate: 10,
  };
}

export default Collection;
