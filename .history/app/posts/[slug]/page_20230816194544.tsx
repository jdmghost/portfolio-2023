import React from 'react';
import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";

import PageHeader from '../../../components/page-header.js';
import PageContent from '../../../components/page-content.js';

import '../../../assets/styles/theme-light.scss';

const getPostContent = (slug: string) => {
    const folder = "posts/";
    const file = `${folder}${slug}.md`;
    const content = fs.readFileSync(file, "utf8");
    const matterResult = matter(content);
    return matterResult;
  };

const Post = (props: any) => {
    const slug = props.params.slug;
    const post = getPostContent(slug);

    return (
        <main className="post">
            <PageHeader icon="⛫" h1={slug} description="Testing." />
            <Markdown>
                {post.content}
            </Markdown>
        </main>
        )
}

export default Post