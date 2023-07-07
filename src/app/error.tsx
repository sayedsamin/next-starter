"use client"; // Error components must be Client Components

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    // </div>
    // Beautiful Error Page using Tailwind CSS
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-red-600">500</h1>
        <h1 className="text-6xl font-medium py-8">
          Oops! Something went wrong.
        </h1>
        <p className="text-2xl pb-12 px-12 font-medium">
          We are working on fixing this. Please come back later.
        </p>
        <button
          onClick={() => reset()}
          className="bg-gradient-to-r from-red-600 to-red-400 hover:from-red-400 hover:to-red-600 text-white font-semibold px-6 py-3 rounded-md mr-6"
        >
          Go Back
        </button>
      </div>
    </div>
  );
}
