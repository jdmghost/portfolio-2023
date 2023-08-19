import React from 'react';

import '../../assets/styles/page-header.scss';

function PageHeader(props) {
    return (
        <section className="page-content wo">
            <div className="col-2-8 m-col-2-6 s-col-1-5">
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
