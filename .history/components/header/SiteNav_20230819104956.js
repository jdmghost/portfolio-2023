"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname} from 'next/navigation';

function SiteNavToggle() {
    let isSiteNavOpen = false;
    let siteNavToggle = document.querySelector('#siteNavToggle');
    let siteNav = document.querySelector('.site-nav');
    
    siteNavToggle.addEventListener('click', () => {
        if (isSiteNavOpen == false) {
            siteNav.classList.add('site-nav--open');
            siteNavToggle.setAttribute('aria-expanded', 'true');
            isSiteNavOpen = true;
        } else {
            siteNav.classList.remove('site-nav--open');
            siteNavToggle.setAttribute('aria-expanded', 'false');
            isSiteNavOpen = false;
        }
    });
    
    siteNav.addEventListener('click', () => {
        siteNav.classList.remove('site-nav--open');
        siteNavToggle.setAttribute('aria-expanded', 'false');
        isSiteNavOpen = false;
    });
}

function SiteNav() {
    const pathname = usePathname();
    SiteNavToggle();

    return (
        <ul id="siteNav" className="site-nav">
            <li>
                <Link href="/about"  aria-current={pathname == "/about" ? "page" : "false"}>
                    About
                </Link>
            </li>
            <li>
                <Link href="/portfolio"  aria-current={pathname == "/portfolio" ? "page" : "false"}>
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
