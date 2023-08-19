import fs from "fs";
import matter from "gray-matter";
import { PostMetadata } from "./PostMetadata";


function getPostMetadata(): PostMetadata[] {
    const folder = "posts/";
    const files = fs.readdirSync(folder);
    const markdownPosts = files.filter((file) => file.endsWith(".md"));

    const posts = markdownPosts.map((fileName) => {
        const fileContents = fs.readFileSync(`posts/${fileName}`, "utf8");
        const matterResult = matter(fileContents);
        return {
            title: matterResult.data.title,
            date: matterResult.data.date,
            image: matterResult.data.image,
            image_alt: matterResult.data.image_alt,
            employer: matterResult.data.employer,
            year: matterResult.data.year,
            roles: matterResult.data.roles,
            slug: fileName.replace(".md", ""),
            summary: matterResult.data.summary,
            site_lnk: matterResult.data.site_link,
        };
    });

    return posts;
}

export default getPostMetadata;