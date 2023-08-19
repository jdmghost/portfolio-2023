import React from 'react';

import '../../assets/styles/page-header.scss';

function PageHeader() {
    return (
        <section className="page-header wo">
            <div className="page-header__deco col-1-3" aria-hidden="true">
                <span>⛫</span>
                <span>⛫</span>
            </div>
            <div className="col-3-10">
                <h1 className="h1">
                    About
                </h1>
                <p className="p--large">
                    Lorem ipsum dolor isit.
                </p>
            </div>
        </section>
    )
}

export default PageHeader
