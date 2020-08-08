import React from 'react';
import { Helmet } from 'react-helmet';

import { css } from '@emotion/core';

import { Footer } from '../../components/Footer';
import SiteNav from '../../components/header/SiteNav';

import SearchComponent from '../../components/searchHeader';
import { Wrapper } from '../../components/Wrapper';
import IndexLayout from '../../layouts';
import config from '../../website-config';
import {
  inner,
  outer,
  SiteDescription,
  SiteHeader,
  SiteHeaderContent,
  SiteMain,
  SiteTitle,
  SiteNavMain,
  SiteArchiveHeader,
} from '../../styles/shared';

const _ = require('lodash');
const PageTemplate = css`
  .site-main {
    margin-top: 64px;
    padding-bottom: 4vw;
    background: #fff;
  }
`;

const page_name = 'Explore';
const page_desc =
  'Navigate through the repository of my writings. Search for the content that you want to read.';

const Explore: React.FC = () => {
  return (
    <IndexLayout>
      <Helmet>
        <title>{`${page_name} | ${config.blogTitle}`}</title>
        <meta name="description" content={page_desc} />
        <meta property="og:site_name" content={config.title} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`${page_name} | ${config.blogTitle}`} />
        <meta property="og:description" content={page_desc} />
        <meta property="og:url" content={config.siteUrl + '/' + page_name.toLowerCase()} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${page_name} | ${config.blogTitle}`} />
        <meta name="twitter:description" content={page_desc} />
        <meta name="twitter:url" content={config.siteUrl + '/' + page_name.toLowerCase()} />
      </Helmet>
      <Wrapper>
        <header className="site-archive-header" css={[SiteHeader, SiteArchiveHeader]}>
          <div css={[outer, SiteNavMain]}>
            <div css={inner}>
              <SiteNav isExplore />
            </div>
          </div>
          <div css={outer}>
            <SiteHeaderContent css={[inner, forSmall]} className="site-header-content">
              <SiteTitle className="site-title post-full-title">{page_name} 🧭</SiteTitle>
              <SiteDescription className="site-description">{page_desc}</SiteDescription>
            </SiteHeaderContent>
          </div>
        </header>
        <main id="site-main" css={[SiteMain, outer]}>
          <div css={inner}>
            <SearchComponent />
          </div>
        </main>
        <Footer />
      </Wrapper>
    </IndexLayout>
  );
};
const forSmall = css`
  @media (max-width: 850px) {
    padding-top: 100px !important;
  }
`;
export default Explore;
