import Navbar from "@/view/component/navbar";
import contentfulClient from "@/app/contentful/contentfulClient";
import { TypeBlogSkeleton, IAsset } from "@/app/contentful/types/team.types";
import RichText from "@/view/component/richText";

const getBlogContentful = async () => {
  try {
    const data = await contentfulClient.getEntries<TypeBlogSkeleton>({
      content_type: "team",
    });
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
  }
};

export default async function TeamView() {
  const teams = await getBlogContentful();
  return (
    <div>
      <Navbar/> 
      {teams &&
        teams.items?.map((team, idx) => (
          <div key={idx}>
            <img
              src={`https:${(team.fields.image as IAsset)?.fields.file.url}`}
            />
            <p className="text-lg">{team.fields.title}</p>
            <RichText document={team.fields.body} />
          </div>
        ))}
    </div>
  );
}

