import React from 'react';

import { NextSeo } from 'next-seo';
import { NEXT_SEO_DEFAULT } from '../config/next-seo.config';

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
