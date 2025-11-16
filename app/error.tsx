"use client";
import React from "react";

export const Error = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  return (
    <div className="w-full h-screen flex justify-center items-center text-2xl font-bold">
      Some error occurred: {error.message}
      
        <button onClick={reset} className="ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Reload page
        </button>

    </div>
  );
};

export default Error;
