import 'normalize.css/normalize.css';
import '../assets/styles/main.scss';

import React from 'react';
import Header from "../components/header/Header.js";
import Footer from "../components/footer.js";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}