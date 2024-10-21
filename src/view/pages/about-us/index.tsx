/*
import Navbar from "@/view/component/navbar";

export default function AboutUsView() {
    return (
        <div>
            <div>
                <Navbar/>                
            </div>            
            <h1 className="text-lg">About-Us Page</h1>
        </div>
    )
}*/

import Navbar from "@/view/component/navbar";
import contentfulClient from "@/app/contentful/contentfulClient";
import { TypeBlogSkeleton, IAsset } from "@/app/contentful/types/about.types";
import RichText from "@/view/component/richText";

const getBlogContentful = async () => {
  try {
    const data = await contentfulClient.getEntries<TypeBlogSkeleton>({
      content_type: "about",
    });
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
  }
};

export default async function AboutUs() {
  const abouts = await getBlogContentful();
  return (
    <div>
      <Navbar/> 
      {abouts &&
        abouts.items?.map((about, idx) => (
          <div key={idx}>
            <img
              src={`https:${(about.fields.image as IAsset)?.fields.file.url}`}
            />
            <p className="text-lg">{about.fields.title}</p>
            <RichText document={about.fields.body} />
          </div>
        ))}
    </div>
  );
}

