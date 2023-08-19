import React from 'react';
import Link from "next/link";
import Image from 'next/image'
import imageString from { props.image };

function postPreview(props) {
  return (
    <article className="post-preview">
      <div className="post-preview__image">
        <Image
          src={props.image}
          width={1000}
          height={500}
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