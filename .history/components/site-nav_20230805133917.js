import React from 'react';
import Link from 'next/link';


function SiteNav() {
    return (
        <ul id="siteNav" className="site-nav">
            <li>
                <Link href="/">
                    Link
                </Link>
            </li>
            <li aria-haspopup="true">
                <Link href="/">
                    Link
                </Link>
                <button className="site-nav__expand-toggle" aria-expanded="false">
                    <span className="sr-only">
                        expand
                    </span>
                </button>
                <ul className="site-nav__sub-nav">
                    <li>
                        <Link href="/">
                            One
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            Two
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            Three
                        </Link>
                    </li>
                </ul>
            </li>
            <li aria-haspopup="true">
                <Link href="/">
                    Link
                </Link>
                <button className="site-nav__expand-toggle" aria-expanded="false">
                    <span className="sr-only">
                        expand
                    </span>
                </button>
                <ul className="site-nav__sub-nav">
                    <li>
                        <Link href="/">
                            One
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            Two
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            Three
                        </Link>
                    </li>
                </ul>
            </li>
        </ul>
    )
}

export default SiteNav
