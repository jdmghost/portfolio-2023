import React from 'react';
import Link from "next/link";
import { PostMetadata } from './PostMetadata';

function postPreview(props: PostMetadata) {
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