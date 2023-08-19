import React from 'react';

import PageHeader from '../../components/page-header.js';
import PageContent from '../../components/page-content.js';

import '../../assets/styles/theme-light.scss';

function Contact() {
    return (
        <main className="contact">
            <PageHeader icon="¤" h1="Contact" description="Testing." />
            <PageContent content="Bla bla bla." />
        </main>
        )
}

export default Contact