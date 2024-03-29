import Head from 'next/head';
import React from 'react';

const defaultMeta = {
  title: 'Carders Zone Gateway',
  description: 'Payment Gateway By Carders Zone.',
  keywords: 'carders zone',
  topics: 'payment, upi, qr, bhim',
  topic: 'payment',
  siteName: 'https://payments.carderszone.online/',
  canonicalUrl: '',
};

type MetaProps = {
  title?: string;
  description?: string;
  keywords?: string;
  topics?: string;
  topic?: string;
  siteName?: string;
  
  canonicalUrl?: string;
};

const SeoMeta: React.FunctionComponent<MetaProps> = ({
  title,
  description,
  keywords,
  topics,
  topic,
  siteName,
  
  canonicalUrl,
}) => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />  
      <title>{title || defaultMeta.title}</title>
      <meta
        name="description"
        content={description || defaultMeta.description}
      />
      <meta name="keywords" content={keywords || defaultMeta.keywords} />
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      <meta name="robots" content="index,follow" />
      <meta name="topics" content={topics || defaultMeta.topics} />
      <meta property="og:title" content={title || defaultMeta.title} />
      <meta
        property="og:description"
        content={description || defaultMeta.description}
      />
      
      {/* <meta name="og:type" content={topic || defaultMeta.topic} /> */}
      <meta
        property="og:site_name"
        content={siteName || defaultMeta.siteName}
      />
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      <meta name="google-site-verification" content="ojkvgtSayTMXjSqowJ7WcEBobUANbgRrBRHQlq4vJPU" />
      <link rel="manifest" href="/manifest.json" />
      <meta name="theme-color" />
    </Head>
  );
};

export default SeoMeta;
