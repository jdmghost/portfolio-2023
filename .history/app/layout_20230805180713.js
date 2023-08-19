import 'normalize.css/normalize.css';
import '../assets/styles/main.scss';

import React from 'react';
import Header from "../components/header.js";
import Footer from "../components/footer.js";

export default function RootLayout({ children }) {
  useEffect(() => {
    document.body.className = pageProps.isDark ? 'dark-mode' : 'light-mode';
  });
  
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