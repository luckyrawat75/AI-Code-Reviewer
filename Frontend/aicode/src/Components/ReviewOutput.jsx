import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { FaCopy } from "react-icons/fa";

const ReviewOutput = ({ response, loading }) => {

  
  const extractCode = (text) => {
    const match = text.match(/```(?:javascript)?\n([\s\S]*?)```/);
    return match ? match[1] : null;
  };

  const improvedCode = extractCode(response);

  const handleCopy = () => {
    if (improvedCode) {
      navigator.clipboard.writeText(improvedCode);
      alert("Code copied!");
    }
  };

  return (
    <div className="h-full overflow-y-auto space-y-4">

      {loading ? (
        <p className="text-blue-400 animate-pulse text-lg">
          ⏳ Analyzing your code...
        </p>
      ) : (
        <>
          
          <div className="bg-gray-900 p-4 rounded-xl border border-gray-700">
            <pre className="whitespace-pre-wrap text-base text-gray-200">
              {response}
            </pre>
          </div>

          
          {improvedCode && (
            <div className="bg-black rounded-xl border border-gray-700 relative">

              
              <button
                onClick={handleCopy}
                className="absolute top-3 right-3 bg-gray-800 hover:bg-gray-700 p-2 rounded-lg"
              >
                <FaCopy />
              </button>

              <SyntaxHighlighter
                language="javascript"
                style={oneDark}
                customStyle={{
                  margin: 0,
                  padding: "20px",
                  borderRadius: "12px",
                }}
              >
                {improvedCode}
              </SyntaxHighlighter>
            </div>
          )}
        </>
      )}

    </div>
  );
};

export default ReviewOutput;