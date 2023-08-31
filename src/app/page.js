import Image from "next/image";
import fs from "fs/promises";
import path from "path";

async function Home({}) {
  let blogPosts = await getBlogPostList("content");
  let otherContent = await getBlogPostList("code-content");

  return (
    <div>
      <h1>Latest Content</h1>
      {blogPosts.map((post) => (
        <p key={post.slug}>{post.content}</p>
      ))}
      <h1>Other Content</h1>
      {otherContent.map((post) => (
        <p key={post.slug}>{post.content}</p>
      ))}
    </div>
  );
}

async function getBlogPostList(folder) {
  const fileNames = await readDirectory(`/${folder}`);
  const blogPosts = [];

  for (let fileName of fileNames) {
    const rawContent = await readFile(`/${folder}/${fileName}`);

    blogPosts.push({
      slug: fileName.replace(".mdx", ""),
      content: rawContent,
    });
  }

  return blogPosts;
}

function readDirectory(localPath) {
  return fs.readdir(path.join(process.cwd(), localPath));
}

function readFile(localPath) {
  return fs.readFile(path.join(process.cwd(), localPath), "utf8");
}

export default Home;
