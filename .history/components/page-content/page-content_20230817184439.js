import React from 'react';

import './page-content.scss';

function PageContent(props) {
    return (
        <section className="page-content wo">
            <div className="col-3-9 m-col-3-8 s-col-1-5">
                <p>{props.content}</p>
            </div>
        </section>
    )
}

export default PageContent
