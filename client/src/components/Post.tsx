import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import drowningDetectionMd from "../posts/DrowningDetection.md";
import { useEffect, useState } from "react";
import rehypeRaw from "rehype-raw";

const posts: { [name: string]: any } = {
  drowningDetection: drowningDetectionMd,
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
        <div style={{ color: "white", margin: 25, fontFamily: "Inter" }}>
          <ReactMarkdown rehypePlugins={[rehypeRaw as any]}>
            {markdownContent}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
