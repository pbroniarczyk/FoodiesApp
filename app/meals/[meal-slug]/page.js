import Link from "next/link";

const MealDetails = () => {
  return (
    <main>
      <h1 style={{ color: "white", textAlign: "center" }}>Meal Details Page</h1>

      <p>
        <Link href="/meals">Go back</Link>
      </p>
      <p>
        <Link href="/">Home</Link>
      </p>
    </main>
  );
};

export default MealDetails;
