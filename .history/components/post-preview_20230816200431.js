import React from 'react';
import Link from "next/link";
import getPostMetadata from './getPostMetadata';

function postPreview({props: {PostMetadata}}) {
  return (
    <article>
        <h2>
          <Link href={`/posts/${props.slug}`}>
            {props.title}
          </Link>
        </h2>
    </article>
  );
};

export default postPreview;