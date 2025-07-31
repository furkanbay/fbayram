import type { NextPage } from "next";
import Layout from "@components/Layout";
import { getAirtable } from "@utils/airtable";
import ExternalLink from "@components/SVG/ExternalLink";

type Props = {
  data: Array<any>;
};

const Project: NextPage<Props> = ({ data }) => {
  return (
    <Layout title="Project">
      <div className="mb-auto my-4">
        <p className="italic text-gray-500">
          Projects that I have worked on.
        </p>
        <div className="space-y-4 mt-4">
          {data.map((i) => (
            <div key={i.id} className="">
              <div className="flex gap-2 items-center">
                <h3 className="text-medium">{i.fields.Name}</h3>
                <a
                  href={i.fields.Url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex text-gray-500 gap-1 transition-all hover:gap-2 items-center hover:text-gray-200"
                >
                  {i.fields.Url}
                  <ExternalLink />
                </a>
              </div>
              <p className="text-gray-500">{i.fields.Description}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  const data = await getAirtable("Project");
  const minifiedData = data.map((item) => {
    return {
      id: item.id,
      fields: item.fields,
    };
  });
  return {
    props: { data: minifiedData },
    revalidate: 10,
  };
}

export default Project;
