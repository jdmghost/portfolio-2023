import React from 'react';
import { getSortedPostsData } from '../lib/posts';
import PageHeader from '../../components/page-header.js';

import '../../assets/styles/theme-light.scss';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}


function Portfolio() {
    return (
        <main className="portfolio">
            <PageHeader icon="#" h1="Portfolio" description="Welcome to my portfolio gallery--a selection of the websites I’ve had a hand in creating, and am the most proud of." />
        </main>
        )
}

export default Portfolio