import React from 'react';
import { Helmet } from 'react-helmet';
import { css } from '@emotion/core';

import { Footer } from '../components/mainFooter';
import SiteNav from '../components/main_header/SiteNav';
import { PostFullContent } from '../components/PostContent';
import { Wrapper } from '../components/Wrapper';
import { Twitter } from '../components/icons/twitter';
import { Facebook } from '../components/icons/facebook';
import { LinkedIn } from '../components/icons/linkedin';
import { Instagram } from '../components/icons/instagram';
import { Mail } from '../components/icons/mail';

import MainIndexLayout from '../layouts/mainIndex';
import config from '../website-config';
import {
  inner,
  outer,
  SiteArchiveHeader,
  SiteHeader,
  SiteMain,
  SiteNavMain,
} from '../styles/mainShared';
import { SiteDescription } from '../styles/shared';
import { NoImage, PostFull, PostFullHeader, PostFullTitle } from '../templates/post';
import ContactForm from '../components/ContactForm';

const PageTemplate = css`
  .site-main {
    margin-top: 64px;
    padding-bottom: 4vw;
    background: #fff;
  }
`;

const page_name = 'Contact';
const page_desc =
  'Please feel free to leave any questions, feedback or  report typos, grammatical errors, or any other types of inaccuracies in the blog.Your help will prove invaluable to make this blog more reliable and accurate.';
const Contact: React.FC = () => (
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
            <SiteNav isContact={true} />
          </div>
        </div>
      </header>
      <main id="site-main" className="site-main" css={[SiteMain, outer]}>
        <div css={inner}>
          <article className="post page" css={[PostFull, NoImage]}>
            <PostFullHeader className="post-full-header">
              <PostFullTitle className="post-full-title" css={specialHeader}>
                Get in touch with me
              </PostFullTitle>
              <SiteDescription>
                <div className="contactSocialLink" css={ContactSocialLink}>
                  <a href={config.facebook} target="_blank" className="facebook-svg">
                    <Facebook css={{ marginLeft: 0 }} />
                  </a>
                  <a href={config.linkedin} target="_blank">
                    <LinkedIn />
                  </a>
                  <a href={config.twitter} target="_blank">
                    <Twitter />
                  </a>
                  <a href={config.instagram} target="_blank">
                    <Instagram />
                  </a>
                  <a href={'mailto:' + config.email} target="_blank" className="mail-svg">
                    <Mail />
                  </a>
                </div>
              </SiteDescription>
              <SiteDescription>
                I would love to hear from you. Don’t be a stranger, just say hello! Feel free to
                drop any feedback, suggestions, or questions. I am always open to discussing new
                projects, creative ideas, and opportunities.
              </SiteDescription>
              <SiteDescription>
                If you want to report bugs, typos, grammatical errors, or any other types of
                inaccuracies in the blog, please open an issue{' '}
                <a
                  href="https://github.com/basnetsoyuj/personal-website/issues/new"
                  target="_blank"
                >
                  here
                </a>
                .
              </SiteDescription>
            </PostFullHeader>

            <PostFullContent className="post-full-content">
              <ContactForm />
            </PostFullContent>
          </article>
        </div>
      </main>
      <Footer />
    </Wrapper>
  </MainIndexLayout>
);

const ContactSocialLink = css`
  display: flex;
  a {
    margin: 2rem;
  }
  svg {
    fill: #000;
    height: 3rem;
  }
  .facebook-svg {
    margin-left: 0;
  }
  .mail-svg {
    margin-right: 0;
  }
  @media (max-width: 350px) {
    a {
      margin: 1.5rem;
      svg {
        height: 2rem;
      }
    }
  }
`;

const specialHeader = css`
  font-family: minerva-modern;
  @media (max-width: 605px) {
    font-size: 4.5rem;
  }
  @media (max-width: 440px) {
    font-size: 3.75rem;
    text-align: center;
  }
`;
export default Contact;
