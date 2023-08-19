import React from 'react';
import { getSortedPostsData } from '../../lib/posts.js';
import PageHeader from '../../components/page-header.js';

import '../../assets/styles/theme-light.scss';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};

export default function Portfolio({ allPostsData }) {
    return (
        <main className="portfolio">
            <PageHeader icon="#" h1="Portfolio" description="Welcome to my portfolio gallery--a selection of the websites I’ve had a hand in creating, and am the most proud of." />
            <section>
                <h2>Blog</h2>
                <ul>
                {allPostsData?.map(({ id, date, title }) => (
                    <li key={id}>
                    {title}
                    <br />
                    {id}
                    <br />
                    {date}
                    </li>
                ))}
                </ul>
            </section>
        </main>
    )
};