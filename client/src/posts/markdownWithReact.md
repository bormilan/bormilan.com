# How to render markdown files in React

_2023.09.23._

---

In this post I will cover how to work with markdown files, how to render them dynamically.

When I started making this website, I knew that I want to make everything as dynamic and generic as I could. The whole website gets the data from json files, so if you want to add a new page you just need to add a new object to the pages.json.

The tricky part comes with the blog posts, because if you want to make it both customizeable and generic you will be facing to a really hard problem. Here comes the markdown.

So the idea is that, you simple delegates the post customization to a lower level. On react level, you just renders a file, and the content and design will be edited on the markdown level.

Why markdown ? Its simplicity, flexibility, and maintainibility makes the perfect format for things like this.(And if you are using notion/obsidian every day, its so handy)

> 📝 **Note:** [Here is a cheat sheet about the basic markdown syntax](https://www.markdownguide.org/cheat-sheet/)

## Import Markdown in a react app

At first, I struggled so much with importing a markdown file, because it not default. I found a solution that is pretty easy.
You just need to simply create a file called <ins>markdown.d.ts</ins>. In that article that I read, they sad "you can place this file whereever typescript will find it.", but for me, this only worked when I put the file the exact same folder as my .md files.

<center><img src="http://www.bormilan.com/markdown1.png" width="50%" height="50%"></center>

In the file, you need to paste this little snippet:

```ts
declare module "*.md" {
  const value: string; // markdown is just a string
  export default value;
}
```

After this setup, you should be able to import .md files.

## Rendering Markdown in React

```ts
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

import { textColor } from "../static";
import drowningDetectionMd from "../posts/DrowningDetection.md";
import markdownWithReact from "../posts/markdownWithReact.md";
```

Here you can see all the modules and dependencies that I used. I used some basic react things, at the first section.
Then I imported the react-markdown module, and a specific plugin, to be able to use html stuff. I will talk about it later. And a syntax highlighter package that will help to make a good look for code snippets.
Then I imported the reference of the actual markdown file that I will read later.

```ts
const posts: { [name: string]: any } = {
  drowningDetection: drowningDetectionMd,
  markdownWithReact: markdownWithReact,
};
```

Then I created a static place to strore the files, and to make the opportuinity to handle the files dinamically. By this I can store the file names in my json that will be the source of the "Posts" page, and render the corresponding file when the user opens up the page of the article.

```ts
const { name } = useParams();

const [markdownContent, setMarkdownContent] = useState<string>("");
```

Atfer that, I saved the url parameters, because this component gets the file name from its parent. And also made a react state to the markdown content.

```ts
useEffect(() => {
  if (name) {
    const filename = posts[name];
    fetch(filename)
      .then((res) => res.text())
      .then((text) => setMarkdownContent(text));
  }
}, []);
```

Then I made a useEffect to fetch the data from the file to the content holder state. From the dependency array, we can notice that this code will only runs when the component mounts.

```ts
return (
  <div style={{ height: "100%", width: "100%" }}>
    <div className="markdown-reader">
      <div style={{ color: textColor, margin: 25, fontFamily: "sans-serif" }}>
        <ReactMarkdown
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
```

And in the render function, we will use the <ins>ReactMarkdown</ins> component. I used some wrapper component for some design reasons.
The <ins>ReactMarkdown</ins> component gets the content in the <ins>children</ins> prop. In the <ins>component</ins> property, a give it a specific <ins>SyntaxHighlighter</ins> that will help us to make a nice looking solution for making code snippets.

Talk a little bit about my settings here:

```ts
  style={atomOneDark}
  wrapLines={true}
```

The <ins>style</ins> will be declare which styles will be used to format the snippet section. You can find all the available styles [here](https://react-syntax-highlighter.github.io/react-syntax-highlighter/demo/).

> 💡**Tip**: You can import a style lik this: `import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs"`, but for some of the styles, you need to change the end of the url (the /hljs) to /prism.

With <ins>wrapLines</ins> I set that if a line is super long, the formatter will wrap it to the next line. Its important I think if I want to make an educative and informative article.

Lets talk a little bit about plugins.

## Plugins

Without plugins you can use all the basic markdown functions, like headings, lists, links etc. But you cant use the github markdown features, such as direct link or tables, or html tags like `<center>` or `<font color="red">`.
To enable these plugins, you just need to install and import these plugins like I did.

For example install the <ins>rehype-raw</ins> plugin to be able to use html tags in your markdown:

```cmd
npm install rehype-raw
```

Then import it:

```ts
import rehypeRaw from "rehype-raw";
```

And if all set up, you can give the <ins>ReactMarkdown<ins> component on the <ins>rehypeRaw</ins> property.

```ts
  <ReactMarkdown
    rehypePlugins={rehypeRaw as any}
    children={markdownContent}
```

There are a lot of useful plugins you can use to improve your markdown renderer. Here is the github repo of the package, you can find everythin here:
[https://github.com/remarkjs/react-markdown#use](https://github.com/remarkjs/react-markdown#use)

If you have any suggestions, or if you are a UI/UX expert, feel free to contact me about how should I make a better UI for my page, especially for the markdown content.
