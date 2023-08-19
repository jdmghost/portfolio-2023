import React from 'react';
import Link from "next/link";

import getPostMetadata from '../../components/getPostMetadata.js';
import PageHeader from '../../components/page-header.js';
import '../../assets/styles/theme-light.scss';

function Portfolio() {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <article>
        <h2>
          <Link href={`/posts/${post.slug}`}>
            {post.title}
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