import Link from "next/link";
// import content, {
//   frontmatter,
// } from "./events/open-source-in-aec-copenhagen-event/page.mdx";

const SinglePage = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div>
        <Link href="/">Go back</Link>
      </div>
      {children}
    </div>
  );
};

export default SinglePage;
