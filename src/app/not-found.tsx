import Link from "next/link";

export default function NotFound() {
  return (
    <div className="sr-content pt--50 text-center">
      <div className="container mx-auto">
        <div className="sect-main py-10">
          <h1 className="title" style={{ fontSize: "5rem", color: "#ff014f" }}>
            404
          </h1>
          <h3 className="mb-4 text-2xl font-bold">Page Not Found</h3>
          <p className="text-gray-400 mb-6">
            The page you are looking for does not exist or has been moved.
          </p>
          <Link href="/" className="rn-btn">
            <span>Back to Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
