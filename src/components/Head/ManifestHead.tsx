import React from 'react';
import NextHead from 'next/head';
// @ts-ignore
import Manifest from 'next-manifest/manifest';
import Link from '../Link';

interface Props {
  title?: string;
  description?: string;
  charset?: string;
  hrefPage?: string;
  hrefManifest: string;
  viewportScale?: number;
  themeColor?: string;
  favIconPath?: string;
  keywords?: string;
  refresh?: number;
  children?: React.ReactElement;
}

const Head: React.FC<Props> = ({
  title = '',
  description = title,
  charset = 'utf-8',
  hrefPage,
  hrefManifest,
  viewportScale,
  themeColor,
  favIconPath,
  keywords = title,
  refresh,
  children,
}) => (
  <NextHead>
    <title>{title}</title>
    <meta charSet={charset} />
    <meta name="description" content={description} />
    <Link href={hrefManifest} passHref>
      <Manifest themeColor={themeColor} initialScale={viewportScale} />
    </Link>
    {hrefPage && (
      <Link href={hrefPage} passHref>
        <link rel="canonical" />
      </Link>
    )}
    {favIconPath && (
      <Link href={favIconPath} passHref>
        <link rel="shortcut icon" type="image/x-icon" />
      </Link>
    )}
    <meta name="keywords" content={keywords} />
    <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
    {refresh && <meta httpEquiv="refresh" content={`${refresh}`} />}
    {children}
  </NextHead>
);

export default Head;
