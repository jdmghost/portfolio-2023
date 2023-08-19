import React from 'react';
import Link from "next/link";

function postPreview() {
  return (
    <article>
        <h2>
          <Link href={`/posts/${post.slug}`}>
            {post.title}
          </Link>
        </h2>
    </article>
  );
};

export default postPreview;