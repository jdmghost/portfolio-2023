import React from 'react';

import localFont from 'next/font/local';

import { NextSeo } from 'next-seo';
import { NEXT_SEO_DEFAULT } from '../config/next-seo.config';

export const fontSinistre = localFont({ 
  src: '.assets/fonts/Sinistre-StCaroline.woff2',
  variable: '--font-sinistre',
});

export default async function Head() {
  const updateMeta = {
    ...NEXT_SEO_DEFAULT,
    title: 'Example Page',
    description: 'This is an example page',
  };

  return (
    <>
      <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <NextSeo {...updateMeta} useAppDir={true} />
    </>
  )
}
