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
      <div>
        <h2>
          <Link href={`/posts/${props.slug}`}>
            {props.title}
          </Link>, {props.year}
        </h2>
      </div>
    </article>
  )
}

export default postPreview;