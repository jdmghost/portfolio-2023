"use-client";

import React from 'react';
import Link from 'next/link';

import { usePathname} from 'next/navigation';


function SiteNav() {
    const pathname = usePathname();

    return (
        <ul id="siteNav" className="site-nav">
            <li className={pathname == "/welcome" ? "active" : ""}>
                <Link href="/about">
                    About
                </Link>
            </li>
            <li className={pathname == "/welcome" ? "active" : ""}>
                <Link href="/contact">
                    Contact
                </Link>
            </li>
        </ul>
    )
}

export default SiteNav
