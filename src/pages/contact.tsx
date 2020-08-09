import React from 'react';
import { Helmet } from 'react-helmet';
import { css } from '@emotion/core';

import { Footer } from '../components/mainFooter';
import SiteNav from '../components/main_header/SiteNav';
import { PostFullContent } from '../components/PostContent';
import { Wrapper } from '../components/Wrapper';
import IndexLayout from '../layouts';
import config from '../website-config';
import {
  inner,
  outer,
  SiteArchiveHeader,
  SiteHeader,
  SiteMain,
  SiteNavMain,
} from '../styles/mainShared';
import {  SiteDescription} from '../styles/shared';
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
  <IndexLayout>
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
              <PostFullTitle className="post-full-title">Get in touch with me</PostFullTitle>
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
  </IndexLayout>
);

export default Contact;
