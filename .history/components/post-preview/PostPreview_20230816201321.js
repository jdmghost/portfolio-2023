import React from 'react';
import Link from "next/link";

function postPreview(props) {
  return (
    <article>
        <h2>
          <Link href={`/posts/${props.slug}`}>
            {props.title}
          </Link>
        </h2>
    </article>
  )
}

export default postPreview;