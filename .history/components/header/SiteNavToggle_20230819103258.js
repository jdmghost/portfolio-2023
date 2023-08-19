import React, { useEffect } from "react";

export default function SiteNavToggle() {
  useEffect(function mount() {
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
  });

  return null;
}