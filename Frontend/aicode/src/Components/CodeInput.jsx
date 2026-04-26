import React from "react";

const CodeInput = ({ code, setCode, onSubmit }) => {
  return (
    <div className="flex flex-col h-full">

      <textarea
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="// Paste your code here..."
        className="flex-1 p-4 text-base md:text-lg rounded-xl bg-black text-green-300 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none font-mono leading-relaxed"
      />

      <button
        onClick={onSubmit}
        className="mt-4 py-3 text-lg rounded-xl bg-blue-600 hover:bg-blue-700 transition font-semibold shadow-md"
      >
        🚀 Review Code
      </button>
    </div>
  );
};

export default CodeInput;