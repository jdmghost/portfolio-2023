'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';


function SiteNav() {
    const pathname = usePathname();
    let currentPage = "";

    if (pathname = this.href) {
        currentPage = "current-page";
    }

    return (
        <ul id="siteNav" className="site-nav">
            <li>
                <Link className={currentPage} href="/about">
                    About
                </Link>
            </li>
            <li>
                <Link href="/contact">
                    Contact
                </Link>
            </li>
        </ul>
    )
};

export default SiteNav;
