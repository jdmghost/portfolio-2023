"use client";

import React from 'react';
import Link from 'next/link';

import { usePathname} from 'next/navigation';


function SiteNav() {
    const pathname = usePathname();

    return (
        <ul id="siteNav" className="site-nav">
            <li className={pathname == "/about" ? "current-page" : ""}>
                <Link href="/about">
                    About
                </Link>
                { if (pathname == "/about") {
                    
                }
                    <Image
      src="/profile.png"
      width={500}
      height={500}
      alt="Picture of the author"
    /> : ""}
            </li>
            <li className={pathname == "/contact" ? "current-page" : ""}>
                <Link href="/contact">
                    Contact
                </Link>
            </li>
        </ul>
    )
}

export default SiteNav
