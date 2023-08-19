import React from 'react';

import '../assets/styles/theme-dark.scss';

import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}


function Home() {
    return (
        <main className="home wo">
            <section className="col-2-9 pv">
                <h1 className="eyebrow">
                    Welcome
                </h1>
                <p className="h1">
                    I am a frontend developer with a background in design, focused on accessibility and efficiency.  
                </p>
            </section>
        </main>
    )
}

export default Home