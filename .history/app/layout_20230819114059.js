"use client";

import 'normalize.css/normalize.css';
import '../assets/styles/main.scss';

import React from 'react';
import { usePathname } from 'next/navigation';

import Header from "../components/header/Header.js";
import Footer from "../components/footer.js";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className="theme--light">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}