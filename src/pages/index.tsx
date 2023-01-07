import { graphql } from 'gatsby';
import { FixedObject } from 'gatsby-image';
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
  SiteHeaderContent,
  SiteMain,
  SiteTitle,
  SiteHeaderStyles,
} from '../styles/mainShared';

import config from '../website-config';

export interface IndexProps {
  data: {
    ogImage: {
      childImageSharp: {
        fixed: FixedObject;
      };
    };
  };
}
const pageTitle = config.title;
const pageUrl = config.siteUrl;

const IndexPage: React.FC<IndexProps> = props => {
  const { width, height } = props.data.ogImage.childImageSharp.fixed;
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
        <meta
          property="og:image"
          content={`${config.siteUrl}${props.data.ogImage.childImageSharp.fixed.src}`}
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
          content={`${config.siteUrl}${props.data.ogImage.childImageSharp.fixed.src}`}
        />
        {config.twitter && (
          <meta
            name="twitter:site"
            content={`@${config.twitter.split('https://twitter.com/')[1]}`}
          />
        )}
        <meta property="og:image:width" content={width.toString()} />
        <meta property="og:image:height" content={height.toString()} />
      </Helmet>
      <Wrapper>
        <div css={[outer, SiteHeader]} className="mainSiteNavMain">
          <div css={inner}>
            <SiteNav />
          </div>
        </div>
        <div css={[outer, SiteHeader, SiteHeaderStyles]} className="site-header-background">
          <div css={inner}>
            <SiteHeaderContent className="site-header-content">
              <SiteTitle className="site-title">
	 	I'm a computer science student working on machine learning. I like
              math, board games, and deep neural networks. <br />
              <br />
              This is my digital space on the web. 🕸️	
              </SiteTitle>
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

export const pageQuery = graphql`
  query IndexPageQuery {
    ogImage: file(relativePath: { eq: "img/main-og-image.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 2000, quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

export default IndexPage;
