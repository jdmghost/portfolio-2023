import React from 'react';
import PageHeader from '../../components/page-header.js';
import fs from "fs";
import Link from "next/link";
import matter from "gray-matter";

import '../../assets/styles/theme-light.scss';
import { PostMetadata } from '../../components/PostMetadata.js';

const getPostMetadata = (): PostMetadata[] => {
  const folder = "posts/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`posts/${fileName}`, "utf8");
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      slug: fileName.replace(".md", ""),
    };
  });

  return posts;
};

function Portfolio() {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((slug) => (
    <article>
        <h2>
          <Link href={`/posts/${slug}`}>
            {slug}
          </Link>
        </h2>
    </article>
  ));

  return (
      <main className="portfolio">
          <PageHeader icon="#" h1="Portfolio" description="Welcome to my portfolio gallery--a selection of the websites I’ve had a hand in creating, and am the most proud of." />
          <section>
              {postPreviews}
          </section>
      </main>
  );
};

export default Portfolio;