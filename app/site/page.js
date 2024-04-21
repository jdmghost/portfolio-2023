import React from 'react';

import PageHeader from '../../components/page-header/page-header.js';

export const metadata = {
    title: 'About this website | Nicky Wolfe',
}

function AboutSite() {
    return (
        <main>
            <PageHeader icon="" h1="About this site" description="" />
            <section className="page-content wo">
                <div className="wysiwyg col-3-9 m-col-3-8 s-col-1-5">
                    <h2>
                        The tech
                    </h2>
                    <p>
                        The site is currently in its first iteration, with no CMS. It uses NextJS to create static pages hosted on Netlify.
                    </p>
                    <h2>
                        Accessibility
                    </h2>
                    <p>
                        The website is in its first iteration, and is currently undergoing testing and upgrades to meet or exceed WCAG version 2.2 Level AA accessibility standards. Please email me at hello@nicky.dev with any accessibility concerns; It&apos;s my responsibility as a good internet neighbour to fix these as soon as possible.
                    </p>
                </div>
            </section>
        </main>
        )
}

export default AboutSite