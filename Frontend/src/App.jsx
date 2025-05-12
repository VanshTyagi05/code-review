import { useState, useEffect } from "react";
import "prismjs/themes/prism-tomorrow.css";
import Editor from "react-simple-code-editor";
import prism from "prismjs";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import axios from "axios";

import "./App.css";

function App() {
  const [code, setCode] = useState(` function sum() {
    return 1 + 1
  }`);
  const [review, setReview] = useState(``);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    prism.highlightAll();
  }, []);

  async function reviewCode() {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/ai/get-response`,
        { code },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setReview(response.data);
    } catch (err) {
      console.error("Review error:", err);
      setError("Failed to get code review. Please try again.");
      setReview("");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <main>
        <div className="left">
          <div className="code">
            <Editor
              value={code}
              onValueChange={setCode}
              highlight={(code) =>
                prism.highlight(code, prism.languages.javascript, "javascript")
              }
              padding={10}
              style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 16,
                border: "1px solid #ddd",
                borderRadius: "5px",
                height: "100%",
                width: "100%",
              }}
            />
          </div>
          <button onClick={reviewCode} className="review" disabled={loading}>
            {loading ? "Reviewing..." : "Review"}
          </button>
        </div>
        <div className="right">
          {error ? (
            <div className="error">{error}</div>
          ) : (
            <Markdown rehypePlugins={[rehypeHighlight]}>{review}</Markdown>
          )}
        </div>
      </main>
    </>
  );
}

export default App;
