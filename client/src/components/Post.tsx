import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

import { textColor } from "../static";
import drowningDetectionMd from "../posts/DrowningDetection.md";
import markdownWithReact from "../posts/markdownWithReact.md";
import seeger from "../posts/seeger.md";

const posts: { [name: string]: any } = {
  drowningDetection: drowningDetectionMd,
  markdownWithReact: markdownWithReact,
  seeger: seeger,
};

export default function Post() {
  const { name } = useParams();

  const [markdownContent, setMarkdownContent] = useState<string>("");

  useEffect(() => {
    if (name) {
      const filename = posts[name];
      fetch(filename)
        .then((res) => res.text())
        .then((text) => setMarkdownContent(text));
    }
  }, []);

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <div className="markdown-reader">
        <div style={{ color: textColor, margin: 25, fontFamily: "sans-serif" }}>
          <ReactMarkdown
            rehypePlugins={rehypeRaw as any}
            children={markdownContent}
            components={{
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || "");
                return !inline && match ? (
                  <SyntaxHighlighter
                    {...props}
                    children={String(children).replace(/\n$/, "")}
                    style={atomOneDark}
                    wrapLines={true}
                    language={match[1]}
                    PreTag="div"
                  />
                ) : (
                  <code {...props} className={className}>
                    {children}
                  </code>
                );
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}
