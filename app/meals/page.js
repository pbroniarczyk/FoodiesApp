import Link from "next/link";

const MealsPage = () => {
  return (
    <div>
      <h1 style={{ color: "white", textAlign: "center" }}>Meals Page</h1>
      <Link href="/meals/share">Share</Link>
      <Link href="/">Go back</Link>
    </div>
  );
};

export default MealsPage;
