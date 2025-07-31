import type { NextPage } from "next";
import Layout from "@components/Layout";
import ExternalLink from "@components/SVG/ExternalLink";

type Props = {
  data: Array<any>;
};
const Article: NextPage<Props> = () => {
  const data: any[] = [];
  return (
    <Layout title="Article">
      <div className="mb-auto my-4">
        <p className="italic text-gray-500">Articles that I have written.</p>
        <div className="space-y-4 mt-4">
          {data.length > 0 ? data.map((i) => (
            <div key={i.id} className="">
              <div className="flex gap-2 items-center">
                <a
                  href={i.fields.Url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex text-gray-100 gap-2 transition-all hover:gap-4 items-center hover:text-gray-50"
                >
                  {i.fields.Name}
                  <ExternalLink />
                </a>
              </div>
              <p className="text-gray-500">{i.fields.Recap}</p>
            </div>
          )) : <div className="text-gray-500">No data found</div>}
        </div>
      </div>
    </Layout>
  );
};


export default Article;
