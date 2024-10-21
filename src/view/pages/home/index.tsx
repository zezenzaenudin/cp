import Navbar from "@/view/component/navbar";
import contentfulClient from "@/app/contentful/contentfulClient";
import { TypeBlogSkeleton, IAsset } from "@/app/contentful/types/blog.types";
import RichText from "@/view/component/richText";

const getBlogContentful = async () => {
  try {
    const data = await contentfulClient.getEntries<TypeBlogSkeleton>({
      content_type: "blog",
    });
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
  }
};

export default async function Homeview() {
  const blogs = await getBlogContentful();
  return (
    <div>
      <Navbar/> 
      {blogs &&
        blogs.items?.map((blog, idx) => (
          <div key={idx}>
            <img
              src={`https:${(blog.fields.image as IAsset)?.fields.file.url}`}
            />
            <p className="text-lg">{blog.fields.title}</p>
            <RichText document={blog.fields.body} />
          </div>
        ))}
    </div>
  );
}

