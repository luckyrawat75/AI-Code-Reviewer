import React, { useState } from "react";
import CodeInput from "./Components/CodeInput";
import ReviewOutput from "./Components/ReviewOutput";
import { reviewCode } from "./Services/api";

function App() {
  const [code, setCode] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleReview = async () => {
    if (!code.trim()) return alert("Please enter code!");

    setLoading(true);
    const result = await reviewCode(code);
    setResponse(result);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 to-black text-white">

      {/* Header */}
      <header className="text-center py-6 border-b border-gray-800">
        <h1 className="text-3xl md:text-4xl font-bold tracking-wide">
          💻 AI Code Reviewer
        </h1>
        <p className="text-gray-400 mt-2 text-sm">
          Analyze, optimize & improve your code instantly
        </p>
      </header>

      {/* Main */}
      <div className="p-4 md:p-6 grid grid-cols-1 lg:grid-cols-2 gap-6 h-[85vh]">

        {/* LEFT */}
        <div className="flex flex-col bg-gray-900 rounded-2xl shadow-lg border border-gray-800 p-4">
          <h2 className="text-lg font-semibold mb-3 text-blue-400">
            ✍️ Your Code
          </h2>

          <CodeInput
            code={code}
            setCode={setCode}
            onSubmit={handleReview}
          />
        </div>

        {/* RIGHT */}
        <div className="flex flex-col bg-gray-900 rounded-2xl shadow-lg border border-gray-800 p-4">
          <h2 className="text-lg font-semibold mb-3 text-green-400">
            🤖 AI Review
          </h2>

          <ReviewOutput
            response={response}
            loading={loading}
          />
        </div>

      </div>
    </div>
  );
}

export default App;