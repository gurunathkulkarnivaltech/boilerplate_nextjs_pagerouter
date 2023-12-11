import React from "react";
import Head from "next/head";

type Props = {
  seo_title: string;
  search_description: string;
};

const SeoComponent = React.memo(function SeoComponent({
  seo_title,
  search_description,
}: Props) {
  return (
    <Head>
      <title>{seo_title}</title>
      <meta name="description" content={search_description} />
      <meta name="og-description" content={search_description} />
      <meta name="og-title" content={seo_title} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
});

export default SeoComponent;
