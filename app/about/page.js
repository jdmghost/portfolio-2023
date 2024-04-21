import React from 'react';
import Link from "next/link";

import PageHeader from '../../components/page-header/page-header.js';

export const metadata = {
    title: 'About | Nicky Wolfe',
}

function About() {
    return (
        <main className="about">
            <PageHeader icon="⛫" h1="About" description="Learn a little more about the developer behind the keyboard." />
            <section className="page-content wo">
                <div className="wysiwyg col-3-9 m-col-3-8 s-col-1-5">
                    <h2>
                        Summary
                    </h2>
                    <p>
                        I am a frontend developer who is always learning, with a special interest in acessibility and efficiency. I love creating hyper-organized projects from beginning to end. My background in design and freelance gives me a unique understanding of all areas of a development project, and how they all work together.
                    </p>
                    <p>
                        With intense attention to detail, and an innate love of research, I love working with static site generators. They give me the ability to control all aspects of the web development process and end product. A useable website <em>and</em> content management system are both equally as important.
                    </p>
                    <p>
                        Aside from all the tech, I enjoy gaming, repair and restoration projects, and trying new things. 
                    </p>
                    <h2>
                        Articles I&apos;ve written or co-wrote
                    </h2>
                    <ul>
                        <li>
                            <Link href="https://manoverboard.com/blog/how-jamstack-is-changing-the-way-we-build-websites/">
                                How Jamstack is changing the way we build websites
                            </Link>
                        </li>
                        <li>
                            <Link href="https://manoverboard.com/blog/jamstack-vs-wordpress-should-you-choose-a-static-website-for-your-organization/">
                                Jamstack vs. WordPress: should you choose a static website for your organization?
                            </Link>
                        </li>
                        <li>
                            <Link href="https://mangrove-web.com/blog/services/website-development/learn-about-technical-side-launching-website/">
                                The Technical Side of Launching a Website
                            </Link>
                        </li>
                        <li>
                            Many client support and content accessibility guides for Mangrove maintenance clients
                        </li>
                    </ul>
                </div>
            </section>
        </main>
    )
}

export default About