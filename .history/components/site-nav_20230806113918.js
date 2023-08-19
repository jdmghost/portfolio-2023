"use client";

import React from 'react';
import Link from 'next/link';

import { usePathname} from 'next/navigation';


function SiteNav() {
    const pathname = usePathname();

    return (
        <ul id="siteNav" className="site-nav">
            <li className={pathname == "/about" ? "current-page" : ""}>
                <Link href="/about" aria-current="page">
                    About
                </Link>
            </li>
            <li className={pathname == "/contact" ? "current-page" : ""}>
                <Link href="/contact" aria-current="page">
                    Contact
                </Link>
            </li>
        </ul>
    )
}

export default SiteNav
