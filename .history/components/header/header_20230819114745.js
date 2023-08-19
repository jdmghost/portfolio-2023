"use client";

import React, { useState } from 'react';
import Link from 'next/link';

import SiteNav from './SiteNav.js';

function Header() {
    const [isOpen, setIsOpen] = useState(false); 
    const siteNavToggleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
        <header className="header wo-full" role="banner">
            {/* Skip Link */}
            <Link href="#main-content" className="skip-link" scroll={false} prefetch={false}>
                Skip Navigation
            </Link>

            {/* Branding */}
            <div className="header__logo col-1-5 m-col-1-4 s-col-1-3">
                <Link href="/">
                    <svg width="31" height="38" viewBox="0 0 31 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.145 33.9524C14.6718 34.4921 14.0249 35.3492 13.2046 36.5238C13.0784 36.746 12.9522 37 12.826 37.2857C12.7313 37.5397 12.5578 37.6667 12.3053 37.6667C12.116 37.6667 12.0371 37.4603 12.0687 37.0476C12.1003 36.6032 12.0845 36.3492 12.0214 36.2857C10.5384 34.381 8.92926 33.4286 7.19389 33.4286C4.51196 33.4286 3.17099 34.1905 3.17099 35.7143C3.17099 35.9683 3.2972 36.2063 3.54962 36.4286C3.80204 36.6508 4.05445 36.7619 4.30687 36.7619C4.36997 36.7619 4.52774 36.4921 4.78015 35.9524C5.06412 35.381 5.49008 35.0952 6.05802 35.0952C6.72061 35.0952 7.05191 35.4762 7.05191 36.2381C7.05191 36.619 6.76794 36.9683 6.2 37.2857C5.66361 37.6032 5.19033 37.7619 4.78015 37.7619C4.14911 37.7619 3.53384 37.5714 2.93435 37.1905C2.36641 36.8095 2.08244 36.3175 2.08244 35.7143C2.08244 34.4127 2.66616 33.2222 3.83359 32.1429C4.46463 31.5397 5.53741 30.7778 7.05191 29.8571C7.20967 29.7619 7.41476 29.4286 7.66718 28.8571C7.95115 28.254 8.09313 27.8095 8.09313 27.5238C8.21934 24.1905 8.28244 19.2698 8.28244 12.7619V8.61905C8.15623 8.30159 7.80916 8.14286 7.24122 8.14286C7.11501 8.14286 6.9257 8.1746 6.67328 8.2381C6.45242 8.26984 6.29466 8.28572 6.2 8.28572H3.59695C3.56539 8.28572 3.43919 8.25397 3.21832 8.19048C1.07277 7.52381 0 6.2381 0 4.33333C0 3.15873 0.36285 2.14286 1.08855 1.28571C1.8458 0.428572 2.80814 0 3.97557 0C4.76438 0 5.49008 0.285714 6.15267 0.857143C6.81527 1.39683 7.14656 2.06349 7.14656 2.85714C7.14656 3.68254 6.9257 4.4127 6.48397 5.04762C6.04224 5.68254 5.45852 6 4.73282 6C4.32265 6 3.89669 5.84127 3.45496 5.52381C3.01323 5.1746 2.79237 4.79365 2.79237 4.38095C2.79237 3.36508 3.20254 2.85714 4.0229 2.85714C4.46463 2.85714 4.82748 3.09524 5.11145 3.57143C5.39542 4.04762 5.60051 4.28572 5.72672 4.28572C6.10534 4 6.29466 3.5873 6.29466 3.04762C6.29466 2.44444 6.07379 1.95238 5.63206 1.57143C5.19033 1.19048 4.66972 1 4.07023 1C3.24987 1 2.5084 1.31746 1.8458 1.95238C1.18321 2.5873 0.851908 3.34921 0.851908 4.23809C0.851908 5.15873 1.15165 5.92064 1.75115 6.52381C2.38219 7.12698 3.15522 7.42857 4.07023 7.42857C5.99491 7.42857 7.69873 6.85714 9.18168 5.71429C10.2229 4.92064 11.5165 3.46032 13.0626 1.33333C13.1573 1.2381 13.2677 1.19048 13.3939 1.19048C13.5201 1.19048 13.6148 1.2381 13.6779 1.33333C13.6779 1.42857 13.6779 1.53968 13.6779 1.66667C13.6463 1.88889 13.6305 3.63492 13.6305 6.90476L13.8198 7.14286H13.8672C13.9618 7.14286 14.5929 6.85714 15.7603 6.28572C16.77 5.74603 17.3379 5.44444 17.4641 5.38095L17.9374 4.85714C18.5053 4.66667 19.3573 4.01587 20.4931 2.90476C21.4712 2.01587 22.2285 1.2381 22.7649 0.57143C22.828 0.507937 22.8911 0.47619 22.9542 0.47619C23.1435 0.47619 23.2382 0.619047 23.2382 0.904762C23.2382 1 23.2066 1.12698 23.1435 1.28571C23.0804 1.44444 23.0489 1.57143 23.0489 1.66667C23.1435 1.88889 24.5949 3.07936 27.4031 5.2381C27.5924 5.39683 28.0183 5.88889 28.6809 6.71429C30.1954 8.80952 30.9527 11.1429 30.9527 13.7143C30.9527 15.5873 30.6371 17.2063 30.0061 18.5714C29.1226 20.1587 28.2234 21.7302 27.3084 23.2857C26.9613 23.9524 26.3776 24.6825 25.5573 25.4762C24.4845 26.5238 23.2697 27.7619 21.913 29.1905V29.2381C21.913 29.2698 21.9288 29.3175 21.9603 29.381C24.2005 30.4921 26.0463 31.7619 27.4977 33.1905H27.545C28.3654 32.5556 29.2646 31.9206 30.2428 31.2857H30.2901C30.5109 31.2857 30.6214 31.4127 30.6214 31.6667C30.6214 31.7936 30.5898 31.8889 30.5267 31.9524C29.2331 32.9683 27.1191 34.8571 24.1847 37.619H23.8061L23.4748 37.0476C21.1399 34.5397 19.5623 33.2698 18.742 33.2381L18.5053 33.3333C18.5053 33.2063 18.5211 33.6825 18.5527 34.7619C18.5842 35.619 18.5842 36.254 18.5527 36.6667C18.4896 37.3333 18.3476 37.6667 18.1267 37.6667C17.8112 37.6667 17.6534 37.5714 17.6534 37.381V30.7619L17.5115 30.6667H17.4641C17.3064 30.7937 17.0382 31.0635 16.6595 31.4762C16.2809 31.8571 16.0916 32.1111 16.0916 32.2381V37.6667C16.0916 37.8889 15.9812 38 15.7603 38C15.4763 38 15.3028 37.6984 15.2397 37.0952C15.1766 36.6508 15.1608 36.0476 15.1924 35.2857C15.2239 34.1429 15.2397 33.7302 15.2397 34.0476L15.145 33.9524ZM8.32977 29.5238C10.4438 29.4921 12.6997 30.3175 15.0977 32L15.145 32.0476L15.2397 31.8571V30.6667C13.5359 28.9206 11.8478 28.0476 10.1756 28.0476C9.95471 28.0476 9.33944 28.4921 8.32977 29.381V29.5238ZM18.5527 31.2857L18.6473 31.381C19.7517 30.2698 21.3608 28.6032 23.4748 26.381C24.2636 25.5238 24.8947 24 25.3679 21.8095C25.7781 20 25.9832 18.3651 25.9832 16.9048C25.9832 13.1905 24.7211 10.3492 22.1969 8.38095C20.714 7.2381 19.5781 6.63492 18.7893 6.57143L18.6947 6.61905C18.6 6.93651 18.5527 11.8095 18.5527 21.2381V28.0476H18.7893C19.8621 26.9365 20.9664 25.8095 22.1023 24.6667C23.3013 23.3016 23.9008 21.9206 23.9008 20.5238C23.9008 19.6984 23.7115 18.9841 23.3328 18.381C22.9226 17.6508 22.3389 17.2857 21.5817 17.2857C21.0768 17.2857 20.6667 17.5079 20.3511 17.9524C20.0356 18.3651 19.8779 18.8254 19.8779 19.3333C19.8779 20.1905 20.3038 20.619 21.1557 20.619C21.1557 20.5238 21.1399 20.381 21.1084 20.1905C21.0768 19.9683 21.0611 19.8095 21.0611 19.7143C21.0611 19.1429 21.3293 18.8571 21.8657 18.8571C22.3389 18.8571 22.5756 19.1746 22.5756 19.8095C22.5756 20.254 22.3863 20.619 22.0076 20.9048C21.629 21.1905 21.2031 21.3333 20.7298 21.3333C20.3196 21.3333 19.9252 21.0952 19.5466 20.619C19.1995 20.1429 19.026 19.6667 19.026 19.1905C19.026 18.0476 19.6728 17.0159 20.9664 16.0952L20.9191 15.9048C20.1618 15.0159 19.7832 13.9206 19.7832 12.619C19.7832 11.1905 20.3827 10.4762 21.5817 10.4762C22.055 10.4762 22.4651 10.6667 22.8122 11.0476C23.1908 11.3968 23.3802 11.8095 23.3802 12.2857C23.3802 12.8254 23.0804 13.0952 22.4809 13.0952C22.0076 13.0952 21.7394 12.9206 21.6763 12.5714C21.6763 12.6349 21.6763 12.2857 21.6763 11.5238C21.6763 11.4286 21.5817 11.381 21.3924 11.381C20.856 11.381 20.5878 11.873 20.5878 12.8571C20.5878 14 21.2977 15.1905 22.7176 16.4286C24.1374 17.6349 24.8473 18.8889 24.8473 20.1905C24.8473 21.7143 24.2005 23.3175 22.9069 25C22.402 25.6667 21.2031 26.9365 19.3099 28.8095C19.1206 28.9365 18.8682 29.1429 18.5527 29.4286V31.2857ZM16.0916 30.3333L16.1863 30.7143L17.5588 29.1905L17.6534 28.9524L17.7008 6.38095L17.5115 6.33333C16.7858 6.61905 16.3598 6.84127 16.2336 7C16.1389 7.15873 16.0916 7.63492 16.0916 8.42857V30.3333ZM27.2611 29.4286C27.2611 28.8889 27.4504 28.619 27.829 28.619C28.0814 28.619 28.2865 28.7143 28.4443 28.9048C28.7282 29.2222 28.886 29.3968 28.9176 29.4286C29.17 29.2698 29.2962 29.0952 29.2962 28.9048C29.2962 28.4603 29.1384 28.0952 28.8229 27.8095C28.5074 27.4921 28.113 27.3333 27.6397 27.3333C27.3242 27.3333 26.3303 28.3016 24.658 30.2381L24.4214 30.3333H24.3267L24.0901 30V29.9524C24.3425 29.4127 24.6107 29 24.8947 28.7143L28.9649 24.7143C29.943 23.7619 30.5109 23.2857 30.6687 23.2857C30.8896 23.2857 31 23.4127 31 23.6667C30.9684 23.8254 30.7634 24.1746 30.3847 24.7143C30.2901 25.127 30.1954 25.5556 30.1008 26C30.0692 26.0317 29.7852 26.0476 29.2489 26.0476C28.4601 26.0476 28.0657 26.254 28.0657 26.6667C28.3181 26.7619 28.6336 26.8889 29.0122 27.0476C29.7379 27.4286 30.1008 27.9683 30.1008 28.6667C30.1008 29.8413 29.5802 30.4286 28.5389 30.4286C27.687 30.4286 27.2611 30.0952 27.2611 29.4286ZM11.2641 27.1429C11.2957 27.2063 11.627 27.3333 12.258 27.5238C12.6682 27.6508 13.173 27.9206 13.7725 28.3333C14.372 28.746 14.8137 29.0159 15.0977 29.1429H15.145L15.2397 29.0476V24.619C15.2397 24.5238 15.1924 24.4762 15.0977 24.4762C14.7822 24.4762 14.0565 24.9048 12.9206 25.7619C11.8163 26.5873 11.2641 27.0476 11.2641 27.1429ZM2.65038 26.9524C2.65038 26.3175 2.87125 25.6667 3.31298 25V24.5238C3.21832 24.3333 3.04478 24.0476 2.79237 23.6667C2.22443 23.2857 1.67226 22.7302 1.13588 22L1.23053 21.8095C2.08244 21.4921 2.99746 20.6667 3.97557 19.3333V19.0952C3.97557 18.2063 3.54962 17.3968 2.69771 16.6667C1.87735 15.9365 1.46718 15.5556 1.46718 15.5238C1.46718 15.4603 2.05089 14.9206 3.21832 13.9048C4.4173 12.8571 5.01679 11.8889 5.01679 11C5.01679 10.3968 4.73282 10.0952 4.16489 10.0952C3.84936 10.0952 3.73893 10.4444 3.83359 11.1429C3.70738 11.3651 3.50229 11.4762 3.21832 11.4762C2.52417 11.4762 2.1771 11.1746 2.1771 10.5714C2.1771 10.1905 2.42952 9.87302 2.93435 9.61905C3.37608 9.39682 3.80204 9.28571 4.21221 9.28571C5.37964 9.28571 5.96336 9.8254 5.96336 10.9048C5.96336 11.2222 5.88448 11.6667 5.72672 12.2381C5.56896 12.7778 5.49008 13.1746 5.49008 13.4286C5.71094 13.746 6.12112 14.1746 6.72061 14.7143C7.3201 15.2222 7.61985 15.4921 7.61985 15.5238C7.61985 15.5556 7.13079 15.9524 6.15267 16.7143C5.17455 17.4762 4.6855 18.1111 4.6855 18.619C4.6855 19.6349 5.11145 20.5714 5.96336 21.4286C6.84682 22.254 7.28855 22.6825 7.28855 22.7143C7.28855 22.873 6.68906 23.381 5.49008 24.2381C4.29109 25.0635 3.6916 25.9048 3.6916 26.7619C3.6916 27.4286 3.94402 27.7619 4.44885 27.7619C4.63817 27.7619 4.78015 27.6825 4.87481 27.5238V27.1905C4.84326 26.6508 5.01679 26.381 5.39542 26.381C6.08957 26.381 6.43664 26.7778 6.43664 27.5714C6.43664 27.9841 6.23155 28.3175 5.82137 28.5714C5.44275 28.7936 5.06412 28.9048 4.6855 28.9048C4.18066 28.9048 3.70738 28.7143 3.26565 28.3333C2.85547 27.9206 2.65038 27.4603 2.65038 26.9524ZM13.6305 24.0476H13.9145L15.145 23.4286L15.2397 23.2381C15.2397 22.381 15.2555 21.0952 15.287 19.381C15.3186 17.6667 15.3344 16.3651 15.3344 15.4762V7.66667C15.3344 7.50794 15.2555 7.42857 15.0977 7.42857C14.9084 7.42857 14.4351 7.60317 13.6779 7.95238C13.6779 7.98413 13.6621 8.04762 13.6305 8.14286V24.0476Z" fill="#022721"/>
                    </svg>
                </Link>
            </div>

            {/* Nav */}
            <nav 
                className="header__nav col-5-13 m-col-4-10 s-col-3-5" 
                role="navigation"
                aria-label="Site Navigation"
                onClick={siteNavToggleClick}
            >
                <button 
                    id="siteNavToggle" 
                    aria-controls="siteNav" 
                    aria-expanded={`${!isOpen ? 'false' : 'true'}`}
                    aria-label="Toggle Navigation"
                >
                    <svg width="31" height="18" viewBox="0 0 31 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 9C7.57735 9 12.8414 9 17 9C25.7395 9 29.5966 9 30.5 9" stroke="#2F0325"/>
                        <path d="M1 17C7.5 16.5 11.8414 16 16 16C24.7395 16 29.5966 17 30.5 17" stroke="#2F0325"/>
                        <path d="M1 1C8 2 11.8414 2 16 2C24.7395 2 29.5966 1 30.5 1" stroke="#2F0325"/>
                    </svg>
                </button>
                <div className={`header__nav__wrap ${!isOpen ? '' : 'open'}`}>
                    <SiteNav />
                </div>       
            </nav>
        </header>
        <div id="main-content"></div>
        </>
    )
}

export default Header