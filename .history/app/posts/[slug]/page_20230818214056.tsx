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
    }));
};

const Post = (props: any) => {
    const slug = props.params.slug;
    const post = getPostContent(slug);

    return (
        <main className="post pv">
            <article className="wo">
                <div className="post__header col-4-10">
                    <h1 className="h2">
                        {post.data.title}
                    </h1>
                    <p className="h4">
                        {post.data.summary}
                    </p>
                </div>

                <ul className="post__meta col-4-7">
                    <li className="eyebrow">Year: {post.data.year}</li>
                </ul>

                <Markdown className="wysiwyg col-7-10">
                    {post.content}
                </Markdown>
            </article>
        </main>
    )
}

export default Post