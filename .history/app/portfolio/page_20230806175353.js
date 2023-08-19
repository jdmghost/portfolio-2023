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

function Portfolio({ allPostsData }) {
    return (
        <main className="portfolio">
            <PageHeader icon="#" h1="Portfolio" description="Welcome to my portfolio gallery--a selection of the websites I’ve had a hand in creating, and am the most proud of." />
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>Blog</h2>
                <ul className={utilStyles.list}>
                {allPostsData.map(({ id, date, title }) => (
                    <li className={utilStyles.listItem} key={id}>
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
}

export default Portfolio