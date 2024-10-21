/*
import Navbar from "@/view/component/navbar";

export default function ServicesView() {
    return (
        <div>
            <div>
                <Navbar/>
            </div>            
            <h1 className="text-lg">Services Page</h1>
        </div>
    )
}*/

import Navbar from "@/view/component/navbar";
import contentfulClient from "@/app/contentful/contentfulClient";
import { TypeBlogSkeleton, IAsset } from "@/app/contentful/types/service.types";
import RichText from "@/view/component/richText";

const getBlogContentful = async () => {
  try {
    const data = await contentfulClient.getEntries<TypeBlogSkeleton>({
      content_type: "service",
    });
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
  }
};

export default async function ServicesView() {
  const services = await getBlogContentful();
  return (
    <div>
      <Navbar/> 
      {services &&
        services.items?.map((service, idx) => (
          <div key={idx}>
            <img
              src={`https:${(service.fields.image as IAsset)?.fields.file.url}`}
            />
            <p className="text-lg">{service.fields.title}</p>
            <RichText document={service.fields.body} />
          </div>
        ))}
    </div>
  );
}

