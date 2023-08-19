import React from 'react';
import Link from 'next/link';


function SiteNav() {
    return (
        <ul id="siteNav" className="site-nav">
            <li>
                <Link href="/about">
                    About
                </Link>
                <Link href="/contact">
                    Contact
                </Link>
            </li>
        </ul>
    )
}

export default SiteNav
