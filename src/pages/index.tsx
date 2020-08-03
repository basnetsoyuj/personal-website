import { graphql } from 'gatsby';
import { FixedObject } from 'gatsby-image';
import React from 'react';
import { Helmet } from 'react-helmet';

import { css } from '@emotion/core';

import { Footer } from '../components/mainFooter';
import SiteNav from '../components/main_header/SiteNav';
import { Wrapper } from '../components/Wrapper';
import IndexLayout from '../layouts';
import {
  inner,
  outer,
  SiteDescription,
  SiteHeader,
  SiteHeaderContent,
  SiteMain,
  SiteTitle,
  SiteHeaderStyles,
} from '../styles/shared';
import config from '../website-config';

const pageTitle = config.title;
const pageUrl = config.siteUrl;

const IndexPage: React.FC = props => {
  return (
    <IndexLayout css={HomePosts}>
      <Helmet>
        <html lang={config.lang} />
        <title>{pageTitle}</title>
        <meta name="description" content={config.description} />
        <meta property="og:site_name" content={config.title} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={config.description} />
        <meta property="og:url" content={pageUrl} />
        <meta
          property="og:image"
          content={`IMG`}
        />
        {config.facebook && <meta property="article:publisher" content={config.facebook} />}
        {config.googleSiteVerification && (
          <meta name="google-site-verification" content={config.googleSiteVerification} />
        )}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={config.description} />
        <meta name="twitter:url" content={pageUrl} />
        <meta
          name="twitter:image"
          content={`IMG`}
        />
        {config.twitter && (
          <meta
            name="twitter:site"
            content={`@${config.twitter.split('https://twitter.com/')[1]}`}
          />
        )}
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="800" />
      </Helmet>
      <Wrapper>
        <div
          css={[outer, SiteHeader, SiteHeaderStyles]}
          className="site-header-background"
        >
          <div css={inner}>
            <SiteNav isHome />
            <SiteHeaderContent className="site-header-conent">
              <SiteTitle className="site-title" css={{textAlign:"center"}}>
                    Site Under Construction 🚧
              </SiteTitle>
              <SiteDescription css={{textAlign:"center"}}>Meanwhile, you can check out some of my blog posts.</SiteDescription>
            </SiteHeaderContent>
          </div>
        </div>
        <main id="site-main" css={[SiteMain, outer]}>
        <div css={inner}>
        </div>
        </main>

        <Footer />
      </Wrapper>
    </IndexLayout>
  );
};
const HomePosts = css`
  @media (min-width: 795px) {
    .post-card-large {
      flex: 1 1 100%;
      flex-direction: row;
      padding-bottom: 40px;
      min-height: 280px;
      border-top: 0;
    }

    .post-card-large .post-card-title {
      margin-top: 0;
      font-size: 3.2rem;
    }

    .post-card-large:not(.no-image) .post-card-header {
      margin-top: 0;
    }

    .post-card-large .post-card-image-link {
      position: relative;
      flex: 1 1 auto;
      margin-bottom: 0;
      min-height: 380px;
    }

    .post-card-large .post-card-image {
      position: absolute;
      width: 100%;
      height: 100%;
    }

    .post-card-large .post-card-content {
      flex: 0 1 361px;
      justify-content: center;
    }

    .post-card-large .post-card-title {
      margin-top: 0;
      font-size: 3.2rem;
    }

    .post-card-large .post-card-content-link {
      padding: 0 0 0 40px;
    }

    .post-card-large .post-card-meta {
      padding: 0 0 0 40px;
    }

    .post-card-large .post-card-excerpt p {
      margin-bottom: 1.5em;
      font-size: 1.8rem;
      line-height: 1.5em;
    }
  }
`;

export default IndexPage;