import React from 'react';
import { UrlLike } from 'next/router';
import getConfig from 'next-server/config';
import Link from 'next/link';

const { publicRuntimeConfig } = getConfig();
const { linkPrefix } = publicRuntimeConfig;

interface Props {
  href: string | UrlLike;
  as?: string | UrlLike;
  children: React.ReactElement;
}

const PrefixedLink: React.FC<Props> = ({ href, as = href, children }) => (
  <Link href={href} as={`${linkPrefix}${as}`}>
    {children}
  </Link>
);

export default PrefixedLink;
