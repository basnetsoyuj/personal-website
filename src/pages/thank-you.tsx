import { Link } from 'gatsby';

import React from 'react';
import { Helmet } from 'react-helmet';

import { Footer } from '../components/mainFooter';
import SiteNav from '../components/main_header/SiteNav';

import { Wrapper } from '../components/Wrapper';

import MainIndexLayout from '../layouts/mainIndex';
import {
  inner,
  outer,
  SiteHeader,
  SiteDescription,
  SiteHeaderContent,
  SiteMain,
  SiteTitle,
  SiteHeaderStyles,
} from '../styles/mainShared';

import config from '../website-config';

const pageTitle = config.title;
const pageUrl = config.siteUrl;

const ThankYouPage: React.FC = () => {
  return (
    <MainIndexLayout>
      <Helmet>
        <html lang={config.lang} />
        <title>{pageTitle}</title>
        <meta name="description" content={config.mainDescription} />
        <meta property="og:site_name" content={config.title} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={config.mainDescription} />
        <meta property="og:url" content={pageUrl} />

        {config.facebook && <meta property="article:publisher" content={config.facebook} />}
        {config.googleSiteVerification && (
          <meta name="google-site-verification" content={config.googleSiteVerification} />
        )}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={config.description} />
        <meta name="twitter:url" content={pageUrl} />
        {config.twitter && (
          <meta
            name="twitter:site"
            content={`@${config.twitter.split('https://twitter.com/')[1]}`}
          />
        )}
      </Helmet>
      <Wrapper>
        <div css={[outer, SiteHeader]} className="mainSiteNavMain">
          <div css={inner}>
            <SiteNav />
          </div>
        </div>
        <div css={[outer, SiteHeader, SiteHeaderStyles]} className="site-header-background">
          <div css={inner}>
            <SiteHeaderContent className="site-header-conent">
              <SiteTitle className="site-title">Thank you!</SiteTitle>
              <SiteDescription className="site-description" css={{textAlign:"center"}}>
                I will get back to you as soon as possible.
              </SiteDescription>
              <SiteDescription className="site-description" css={{textAlign:"center"}}>
                Meanwhile, you can checkout some of my recent blog posts.
              </SiteDescription>
              <SiteDescription>
                <Link css={{ marginTop: '5px' }} to="/blog">
                  Go to the Blog Home Page →
                </Link>
                </SiteDescription>
            </SiteHeaderContent>
          </div>
        </div>
        <main id="site-main" css={[SiteMain, outer]}>
          <div css={inner}></div>
        </main>
        <Footer />
      </Wrapper>
    </MainIndexLayout>
  );
};

export default ThankYouPage;
