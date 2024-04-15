import Link from "next/link";
const SinglePage = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div>
        <Link href="/" className="bg-gray-200 py-2">
          Go back
        </Link>
      </div>
      {children}
    </div>
  );
};

export default SinglePage;
