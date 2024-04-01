import Link from "next/link";

const SharePage = () => {
  return (
    <div>
      <h1 style={{ color: "white", textAlign: "center" }}>Share Page</h1>

      <Link href="/meals">Go back</Link>
      <Link href="/">Home</Link>
    </div>
  );
};

export default SharePage;
