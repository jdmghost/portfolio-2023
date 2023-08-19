import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import SiteNav from './site-nav.js';

import logo from '../assets/images/logo.svg';

function Header() {
    return (
        <>
        <header className="header wo pv--s" role="banner">
            {/* Skip Link */}
            <Link href="#main-content" className="skip-link" scroll={false} prefetch={false}>
                Skip Navigation
            </Link>

            {/* Branding */}
            <div className="header__logo col-1-5 m-col-1-4 s-col-1-5">
                <Link href="/">
                    <Image src={logo} alt="Logo"/>
                </Link>
            </div>

            {/* Nav */}
            <nav 
                className="header__nav col-5-13 m-col-4-10 s-col-1-5" 
                role="navigation"
                aria-label="Site Navigation"
            >
                <button id="siteNavToggle" aria-controls="siteNav" aria-expanded="false">
                    Menu
                </button>
                <div className="header__nav__wrap">
                    <SiteNav />
                </div>       
            </nav>
        </header>
        <div id="main-content"></div>
        </>
    )
}

export default Header