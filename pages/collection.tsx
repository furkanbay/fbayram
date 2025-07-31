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

const Collection: NextPage<Props> = () => {
  const data: any[] = [];

  return (
    <Layout title="Collection">
      <div className="mb-auto my-4 text-gray-500">
        <p className="italic">
          Things I like while surfing the web and I think you will like it too.
        </p>
       
        <ul className="mt-4">
          {data.length > 0 ? data
            .filter(d => d.fields.Category === "All")
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
            )) : <div className="text-gray-500">No data found</div>}
        </ul>
      </div>
    </Layout>
  );
};

export default Collection;
