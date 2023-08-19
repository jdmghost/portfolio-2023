import React from 'react';
import PageHeader from '../../components/page-header.js';
import fs from "fs";

import '../../assets/styles/theme-light.scss';

const getPostMetadata = () => {
  const folder = "posts/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));
  const slugs = markdownPosts.map((file) => file.replace(".md", ""));
  return slugs;
}

function Portfolio() {
    return (
        <main className="portfolio">
            <PageHeader icon="#" h1="Portfolio" description="Welcome to my portfolio gallery--a selection of the websites I’ve had a hand in creating, and am the most proud of." />
            <section>
                <h2>Blog</h2>
                <ul>
                </ul>
            </section>
        </main>
    )
}

export default Portfolio