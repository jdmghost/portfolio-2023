import React from 'react';

export const metadata = {
    title: 'Home | Nicky Wolfe',
    description: 'I am a frontend developer with a background in design, focused on accessibility and efficiency.',
}

function Home() {
    return (
        <main className="home wo">
            <section className="col-2-9 pv">
                <h1 className="eyebrow">
                    Welcome
                </h1>
                <p className="h1">
                    I am a frontend developer with a background in design, focused on accessibility and efficiency.
                </p>
            </section>
        </main>
    )
}

export default Home