import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";

export async function generateStaticParams() {
  const files = fs.readdirSync("content/events");
  return files.map((slug) => ({
    slug: path.parse(slug).name,
  }));
}

const EventPage = async ({ params }: { params: { slug: string } }) => {
  const data = fs.readFileSync(`content/events/${params.slug}.mdx`);
  const { content, frontmatter } = await compileMDX<{
    title: string;
    signup: string;
  }>({
    source: data,
    options: { parseFrontmatter: true },
  });
  return (
    <article className="prose prose-a:no-underline prose-ul:color prose-a:text-gray-500 prose-li:marker:text-yellow-200">
      <h1>{frontmatter.title}</h1>
      {content}
      <a href={frontmatter.signup}>Sign up</a>
    </article>
  );
};

export default EventPage;
