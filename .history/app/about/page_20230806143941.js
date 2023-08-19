import React from 'react';

import PageHeader from '../../components/page-header.js';
import PageContent from '../../components/page-content.js';

import '../../assets/styles/theme-light.scss';

function About() {
    return (
        <main className="about">
            <PageHeader icon="⛫" h1="About" description="Testing." />
            <PageContent content="<p>Bla bla bla.</p>" />
        </main>
        )
}

export default About