import Image from "next/image";
import fs from "fs/promises";
import path from "path";

async function Home({}) {
  let blogPosts = await getBlogPostList();

  return (
    <div>
      <h1>Latest Content</h1>
      {blogPosts.map((post) => (
        <p key={post.slug}>{post.content}</p>
      ))}
    </div>
  );
}

async function getBlogPostList() {
  const fileNames = await readDirectory("/content");
  const blogPosts = [];

  for (let fileName of fileNames) {
    const rawContent = await readFile(`/content/${fileName}`);

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
