import React from 'react';
import Link from "next/link";
import Image from 'next/image'

function postPreview(props) {
  return (
    <article>
      <Image
        src={props.image}
        alt=""
      />
      <h2>
        <Link href={`/posts/${props.slug}`}>
          {props.title}
        </Link>
      </h2>
    </article>
  )
}

export default postPreview;