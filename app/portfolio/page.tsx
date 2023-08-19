import React from 'react';

import getPostMetadata from '../../components/getPostMetadata';
import PageHeader from '../../components/page-header/page-header.js';
import PostPreview from '../../components/post-preview/PostPreview.js';

function Portfolio() {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return (
      <main className="portfolio">
          <PageHeader icon="#" h1="Portfolio" description="Welcome to my portfolio gallery--a selection of the websites I’ve had a hand in creating, and am the most proud of." />
          <section className="portfolio__posts">
              {postPreviews}
          </section>
      </main>
  );
};

export default Portfolio;