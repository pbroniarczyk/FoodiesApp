import Link from "next/link";

const SharePage = () => {
  return (
    <main>
      <h1 style={{ color: "white", textAlign: "center" }}>Share Page</h1>

      <p>
        <Link href="/meals">Go back</Link>
      </p>
      <p>
        <Link href="/">Home</Link>
      </p>
    </main>
  );
};

export default SharePage;
