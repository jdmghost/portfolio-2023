import React from 'react';
import Link from "next/link";

import PageHeader from '../../components/page-header/page-header.js';

export const metadata = {
    title: 'Contact | Nicky Wolfe',
}

function Contact() {
    return (
        <main className="contact">
            <PageHeader icon="¤" h1="Contact" description="How to get in touch." />
            <section className="page-content wo">
                <div className="wysiwyg col-3-9 m-col-3-8 s-col-1-5">
                    <h2>
                        Freelance
                    </h2>
                    <p>
                        I am available for freelance projects. I love to collaborate with web designers or branding specialists to create unique digital identities. Get intouch via email (hello@nicky.dev), with the subject line &quot;Project&quot;.
                    </p>
                    <h2>
                        Other Inquirires
                    </h2>
                    <p>
                        Email me: hello@nicky.dev
                    </p>
                    <p>
                        <Link href="https://www.linkedin.com/in/nicky-wolfe/">
                            Find me on LinkedIn
                        </Link>
                    </p>
                </div>
            </section>
        </main>
    )
}

export default Contact