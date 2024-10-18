import contentfulClient from "@/app/components/theservices/contentfulClient";
import { TypeBlogSkeleton, IAsset } from "./type/blog.type";
import RichText from "./richText";

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

export default async function Services() {
  const blogs = await getBlogContentful();
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 lg:pt-4">
        <div className="text-center py-10">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800">
                Our Services
            </h1>    
        </div>
        
      {blogs &&
        blogs.items?.map((blog, idx) => (
          <div key={idx} className="mb-10 bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              className="w-full h-64 object-cover object-center"
              src={`https:${(blog.fields.image as IAsset)?.fields.file.url}`}
              alt={blog.fields.title}
            />
            <div className="p-6">
              <p className="text-xl font-semibold mb-2">{blog.fields.title}</p>
              <div className="text-gray-700 text-base">
                <RichText document={blog.fields.body} />
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}