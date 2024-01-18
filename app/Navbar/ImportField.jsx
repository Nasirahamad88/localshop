"use client"
import React, { useState } from 'react';

function ImportField() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="w-full relative flex items-center justify-center md:justify-end mr-4">
      <div className="relative w-full max-w-md mr-4">
        <input
          type="text"
          className="w-full bg-white rounded-md px-4 py-2 border border-gray-300 focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-200 placeholder-gray-500 text-sm"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="absolute right-0 top-0 mt-3 mr-4">
          <svg
            className="w-4 h-4 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default ImportField;
