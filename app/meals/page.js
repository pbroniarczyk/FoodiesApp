import Link from "next/link";

const MealsPage = () => {
  return (
    <main>
      <h1 style={{ color: "white", textAlign: "center" }}>Meals Page</h1>
      <p>
        <Link href="/meals/share">Share</Link>
      </p>
      <p>
        <Link href="/">Go back</Link>
      </p>
      <hr />
      <p>
        <Link href="/meals/meal-1">First meal</Link>
      </p>
      <p>
        <Link href="/meals/meal-2">Second meal</Link>
      </p>
      <p>
        <Link href="/meals/meal-3">Third meal</Link>
      </p>
    </main>
  );
};

export default MealsPage;
