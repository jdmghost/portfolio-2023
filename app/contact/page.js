import React from 'react';

import PageHeader from '../../components/page-header/page-header.js';
import PageContent from '../../components/page-content/page-content.js';

function Contact() {
    return (
        <main className="contact">
            <PageHeader icon="¤" h1="Contact" description="Testing." />
            <PageContent content="Bla bla bla." />
        </main>
        )
}

export default Contact