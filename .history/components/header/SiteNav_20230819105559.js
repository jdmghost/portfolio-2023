"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function SiteNav() {
    const pathname = usePathname();
    SiteNavToggle();

    return (
        <ul id="siteNav" className="site-nav">
            <li>
                <Link href="/about" aria-current={pathname == "/about" ? "page" : "false"}>
                    About
                </Link>
            </li>
            <li>
                <Link href="/portfolio" aria-current={pathname == "/portfolio" ? "page" : "false"}>
                    Portfolio
                </Link>
            </li>
            <li>
                <Link href="/contact" aria-current={pathname == "/contact" ? "page" : "false"}>
                    Contact
                </Link>
            </li>
        </ul>
    )
}

export default SiteNav
