"use client";
export default function Error({ error }) {
  console.log(error);
  return (
    <main className="error">
      <h1>Somethin went wrong!</h1>
    </main>
  );
}
