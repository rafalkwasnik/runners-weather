"use client";

import React from "react";
import { useRouter } from "next/navigation";

const PreviousPage = () => {
  const router = useRouter();
  return (
    <button
      type="button"
      className="block border-2 uppercase mt-20 p-2"
      onClick={() => router.back()}
    >
      back
    </button>
  );
};

export default PreviousPage;
