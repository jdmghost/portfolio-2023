import React from 'react';

import './page-header.scss';

function PageHeader(props) {
    return (
        <section className="page-header wo">
            <div className="page-header__deco col-1-3 m-col-1-3 s-hide" aria-hidden="true">
                <span>{props.icon}</span>
                <span>{props.icon}</span>
            </div>
            <div className="col-3-10 m-col-3-8 s-col-1-5">
                <h1 className="h1">
                    {props.h1}
                </h1>
                <p className="h4">
                    {props.description}
                </p>
            </div>
        </section>
    )
}

export default PageHeader
