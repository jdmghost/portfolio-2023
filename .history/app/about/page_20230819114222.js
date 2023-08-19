import React from 'react';

import PageHeader from '../../components/page-header/page-header.js';
import PageContent from '../../components/page-content/page-content.js';

function About() {
    return (
        <main className="about">
            <PageHeader icon="⛫" h1="About" description="Testing." />
            <PageContent content="Bla bla bla." />
        </main>
        )
}

export default About