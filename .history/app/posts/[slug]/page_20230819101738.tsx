import React from 'react';
import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import Link from "next/link";

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
                <div className="post__header col-3-8">
                    <h1 className="h2">
                        {post.data.title}
                    </h1>
                    <p className="h4">
                        {post.data.summary}
                    </p>
                </div>

                <Markdown className="wysiwyg col-3-8">
                    {post.content}
                </Markdown>

                
                <ul className="post__meta col-8-10">
                    <li>
                        <Link href={post.data.site_link}>
                            Website Link
                        </Link>
                    </li>
                    <li>{post.data.year}</li>
                    <li>Roles: {post.data.roles}</li>
                    <li>Built @ {post.data.employer}</li>
                </ul>
            </article>
        </main>
    )
}

export default Post