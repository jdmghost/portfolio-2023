import React from 'react';
import Link from "next/link";

function postPreview(props) {
  return (
    <article className="post-preview">
      <div className="post-preview__image">
        <img
          src={props.image}
          alt=""
        />
      </div>
      <div className="post-preview__content">
        <h2>
          <Link href={`/posts/${props.slug}`}>
            {props.title}
          </Link>, {props.year}
        </h2>
        <p>
          {props.employer}
        </p>
        <p>
          {props.roles}
        </p>
      </div>
    </article>
  )
}

export default postPreview;