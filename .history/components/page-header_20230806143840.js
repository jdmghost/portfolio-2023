import React from 'react';

import '../assets/styles/page-header.scss';

function PageHeader(props) {
    return (
        <section className="page-header wo">
            <div className="page-header__deco col-1-3 m-col-1-3 s-hide" aria-hidden="true">
                <span>{props.icon}</span>
                <span>{props.icon}</span>
            </div>
            <div className="col-3-10 m-col-3-8 s-col-1-5">
                {props.content}
            </div>
        </section>
    )
}

export default PageHeader
