import React from 'react';

import '../../assets/styles/page-header.scss';

function PageHeader({props}) {
    return (
        <section className="page-header wo">
            <div className="page-header__deco col-1-3" aria-hidden="true">
                <span>{props.icon}⛫</span>
                <span>{props.icon}⛫</span>
            </div>
            <div className="col-3-10">
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
