import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import drowningDetectionMd from "../posts/drowning-detection1/DrowningDetection.md";
import { useEffect, useState } from "react";

const posts: { [name: string]: any } = {
  drowningDetection: drowningDetectionMd,
};

export default function Post() {
  const { name } = useParams();

  // const isBelowSmall = useMediaQuery("(max-width:700px)");
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
    <div className="markdown-reader">
      <ReactMarkdown>{markdownContent}</ReactMarkdown>
    </div>
  );

  // return (

  {
    /* <Box display="flex" flexDirection="column" sx={{ m: 3 }}> */
  }
  {
    /*   <Typography variant={"h3"} color={textColor} sx={{ m: 2 }}> */
  }
  {
    /*     {post.title} */
  }
  {
    /*   </Typography> */
  }
  {
    /*   <Box */
  }
  {
    /*     display="flex" */
  }
  {
    /*     flexDirection="column" */
  }
  {
    /*     justifyContent="space-around" */
  }
  {
    /*   // sx={{ backgroundColor: "white" }} */
  }
  {
    /*   > */
  }
  {
    /*     {post.paragraphs.map((paragraph: IParagraph) => ( */
  }
  {
    /*       <div style={{ margin: "10px" }}> */
  }
  {
    /*         <Typography variant={"body1"} color={textColor}> */
  }
  {
    /*           {paragraph.text} */
  }
  {
    /*         </Typography> */
  }
  {
    /*         <div style={{ height: `${paragraph.imageConfig.size * 100}px` }}> */
  }
  {
    /*           {getImageByName(paragraph.image)} */
  }
  {
    /*         </div> */
  }
  {
    /*       </div> */
  }
  {
    /*     ))} */
  }
  {
    /*   </Box> */
  }
  {
    /*   <Box */
  }
  {
    /*     display="flex" */
  }
  {
    /*     flexDirection="row" */
  }
  {
    /*     justifyContent="space-around" */
  }
  {
    /*     sx={{ opacity: 0.5 }} */
  }
  {
    /*   > */
  }
  {
    /*     <Typography color={textColor}>{post.footer.date}</Typography> */
  }
  {
    /*     <Typography color={textColor}>{post.footer.message}</Typography> */
  }
  {
    /*     <Typography color={textColor}>{post.footer.link}</Typography> */
  }
  {
    /*   </Box> */
  }
  {
    /* </Box> */
  }
  // );
}
