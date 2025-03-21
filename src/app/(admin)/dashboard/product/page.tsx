"use client";

import { useState } from "react";

export default function AdminProductPage() {
  const [status, setStatus] = useState("");
  const revalidate = async () => {
    const res = await fetch(
      "http://localhost:3000/api/revalidate?tag=products&secret=123123",
      {
        method: "POST",
      }
    );
    const response = await res.json();
    if (response.revalidate) {
      setStatus("Revalidated");
    }
    // console.log(await res.json());
  };
  return (
    <div>
      <h1>{status}</h1>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-5 rounded"
        onClick={() => revalidate()}
      >
        Revalidate
      </button>
    </div>
  );
}
