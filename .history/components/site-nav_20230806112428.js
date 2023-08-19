"use-client";

import React from 'react';
import Link from 'next/link';

import { useRouter } from "next/router";


function SiteNav() {
    const router = useRouter();

    return (
        <ul id="siteNav" className="site-nav">
            <li className={router.pathname == "/about" ? "active" : ""}>
                <Link href="/about">
                    About
                </Link>
            </li>
            <li className={router.pathname == "/contact" ? "active" : ""}>
                <Link href="/contact">
                    Contact
                </Link>
            </li>
        </ul>
    )
}

export default SiteNav
