import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import logo from '../assets/images/logo.svg';

function Footer() {
    return (
        <footer className="footer wo" role="contentinfo">
            {/* Branding */}
            <div className="footer__logo col-1-5 m-col-1-4 s-col-1-5">
                <Link href="/">
                    <Image src={logo} alt="Logo"/>
                </Link>
            </div>


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