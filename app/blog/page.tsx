import { getBlogList } from "@/lib/api";
import { Blog } from "@/lib/types";

export default async function BlogPage() {
  try {
    const blogs = await getBlogList();

    return (
      <div>
        <h1>Blog List</h1>
        <ul>
          {blogs.contents.map((blog: Blog) => (
            <li key={blog.id}>{blog.title}</li>
          ))}
        </ul>
      </div>
    );
  } catch (error) {
    console.error("Error fetching blog list:", error);
    return <div>Failed to load blog list</div>;
  }
}
