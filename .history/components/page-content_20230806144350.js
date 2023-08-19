import React from 'react';

import '../assets/styles/page-content.scss';

function PageContent(props) {
    return (
        <section className="page-content wo">
            <div className="col-3-8 m-col-3-8 s-col-1-5">
                {props.content}
            </div>
        </section>
    )
}

export default PageContent
