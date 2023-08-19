import React from 'react';
import fs from "fs";

import PageHeader from '../../../components/page-header.js';
import PageContent from '../../../components/page-content.js';

import '../../../assets/styles/theme-light.scss';

const getPostContent = (slug: string) => {
    const folder = "posts/";
    const file = `${folder}${slug}.md`;
    const content = fs.readFileSync(file, "utf8");
    return content;
  };

const Post = (props: any) => {
    const slug = props.params.slug;
    return (
        <main className="post">
            <PageHeader icon="⛫" h1={slug} description="Testing." />
            <PageContent content="Bla bla bla." />
        </main>
        )
}

export default Post