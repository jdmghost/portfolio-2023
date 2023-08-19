import React from 'react';
import Link from 'next/link';

function Footer() {
    return (
        <footer className="footer wo" role="contentinfo">
            {/* Copyright & Legal */}
            <p className="col-1-12 m-col-1-10 s-col-1-5">
                &copy; Company name, {new Date().getFullYear()}
                <span> | </span>
                <Link href="/">
                    Privacy Policy
                </Link>
            </p>
        </footer>
    )
}

export default Footer