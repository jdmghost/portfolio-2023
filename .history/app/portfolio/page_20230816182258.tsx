import React from 'react';
import PageHeader from '../../components/page-header.js';
import fs from "fs";
import Link from "next/link";

import '../../assets/styles/theme-light.scss';

const getPostMetadata = () => {
  const folder = "posts/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));
  const slugs = markdownPosts.map((file) => file.replace(".md", ""));
  return slugs;
};

function Portfolio() {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((slug) => {
    <article>
        <h2>
          <Link href={`/posts/${slug}`}>
            {slug}
          </Link>
        </h2>
    </article>
  });

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