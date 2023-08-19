import React from 'react';
import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";

import getPostMetadata from '../../../components/getPostMetadata';

import '../../../assets/styles/theme-light.scss';

const getPostContent = (slug: string) => {
    const folder = "posts/";
    const file = `${folder}${slug}.md`;
    const content = fs.readFileSync(file, "utf8");
    const matterResult = matter(content);
    return matterResult;
};

export const generateStaticParams = async () => {
    const posts = getPostMetadata();
    return posts.map((post) => ({
        slug: post.slug,
        title: post.title,
        date: post.date,
        image: post.image,
        image_alt: post.image_alt,
        employer: post.employer,
        year: post.year,
        roles: post.roles,
        summary: post.summary,
        site_link: post.site_link,
    }));
};

const Post = (props: any) => {
    const slug = props.params.slug;
    const postContent = getPostContent(slug);

    return (
        <main className="post">
            <article>
                <h2>
                    {postContent.title}
                </h2>
                <Markdown>
                    {postContent.content}
                </Markdown>
            </article>
        </main>
    )
}

export default Post