import 'normalize.css/normalize.css';
import '../assets/styles/main.scss';

import React, { useEffect } from 'react';
import Header from "../components/header.js";
import Footer from "../components/footer.js";

export default function RootLayout({ children, pageProps }) {
  useEffect(() => {
    document.body.className = pageProps.isDark ? 'dark-mode' : 'light-mode';
  });

  const pageProps = this.props?.__NEXT_DATA__?.props?.pageProps;

  return (
    <html lang="en">
      <head />
      <body className={pageProps.isDark ? 'dark-mode' : 'light-mode'}>
        <Header />
          {children}
        <Footer />
        <script type="text/javascript" src="/global.js"></script>
      </body>
    </html>
  )
}