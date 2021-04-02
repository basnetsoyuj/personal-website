import React from 'react';
import { Helmet } from 'react-helmet';
import { css } from '@emotion/core';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';
import { Footer } from '../components/mainFooter';
import SiteNav from '../components/main_header/SiteNav';
import { PostFullContent } from '../components/PostContent';
import { Wrapper } from '../components/Wrapper';

import MainIndexLayout from '../layouts/mainIndex';

import config from '../website-config';
import {
  inner,
  outer,
  SiteArchiveHeader,
  SiteHeader,
  SiteMain,
  SiteNavMain,
  SiteTitle,
  PostFullImage,
} from '../styles/mainShared';
import { NoImage, PostFull, PostFullHeader, PostFullTitle } from '../templates/post';

const PageTemplate = css`
  .site-main {
    margin-top: 64px;
    padding-bottom: 4vw;
    background: #fff;
  }
`;
const page_name = 'About';
const page_desc =
  'Hey! I am Soyuj Jung Basnet, an Impassioned Deep Learning & Machine Learning Practitioner from Nepal.\
I have always been fascinated by Mathematics, Computer Science, and Physics. I love to explore how and why things work \
the way they do. This website was created to help me do exactly that. By penning down my thoughts, experiences, and point \
of view on various technical and non-technical areas, I intend to understand things better, explain them clearly, and \
ultimately become a better problem solver. Enjoy my blogs!';

const About: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "img/sjb.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 3840, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <MainIndexLayout>
      <Helmet>
        <title>{`${page_name} | ${config.title}`}</title>
        <meta name="description" content={page_desc} />
        <meta property="og:site_name" content={config.title} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`${page_name} | ${config.title}`} />
        <meta property="og:description" content={page_desc} />
        <meta property="og:url" content={config.siteUrl + '/' + page_name.toLowerCase()} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${page_name} | ${config.title}`} />
        <meta name="twitter:description" content={page_desc} />
        <meta name="twitter:url" content={config.siteUrl + '/' + page_name.toLowerCase()} />
      </Helmet>
      <Wrapper css={PageTemplate}>
        <header className="site-archive-header no-image" css={[SiteHeader, SiteArchiveHeader]}>
          <div css={[outer, SiteNavMain]} className="mainSiteNavMain">
            <div css={inner}>
              <SiteNav isAbout={true} />
            </div>
          </div>
        </header>
        <main id="site-main" className="site-main" css={[SiteMain, outer]}>
          <div css={inner}>
            <article className="post page" css={[PostFull, NoImage]}>
              <PostFullHeader className="post-full-header">
                <PostFullTitle className="post-full-title">About</PostFullTitle>
              </PostFullHeader>
              <PostFullHeader className="post-full-header" css={{ paddingTop: '50px' }}>
                <SiteTitle className="site-title" css={{ textAlign: 'center' }}>
                  Hi, I'm Soyuj ...
                </SiteTitle>
              </PostFullHeader>
              <PostFullImage>
                <Img
                  fluid={data.file.childImageSharp.fluid}
                  alt="Soyuj Jung Basnet"
                  imgStyle={{ opacity: '1', borderRadius: 4 }}
                />
              </PostFullImage>

              <PostFullHeader className="post-full-header" css={{ paddingTop: '50px' }}>
                <SiteTitle className="site-title" css={{ textAlign: 'center' }}>
                  ...an Impassioned Deep Learning &amp; Machine Learning Practitioner from Nepal.
                </SiteTitle>
              </PostFullHeader>

              <PostFullContent className="post-full-content">
                <div className="post-content">
                  <p>
                    I have always been fascinated by Mathematics, Computer Science, and Physics. I
                    love to explore how and why things work the way they do.
                  </p>
                  <p>
                    This website was created to help me do exactly that. By penning down my
                    thoughts, experiences, and point of view on various technical and non-technical
                    areas, I intend to understand things better, explain them clearly, and
                    ultimately become a better problem solver.
                  </p>
                  <p>Enjoy my blogs!</p>
                </div>
              </PostFullContent>
            </article>
          </div>
        </main>
        <Footer />
      </Wrapper>
    </MainIndexLayout>
  );
};

export default About;
