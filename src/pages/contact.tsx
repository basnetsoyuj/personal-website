import React from 'react';
import { Helmet } from 'react-helmet';

import { css } from '@emotion/core';

import { Footer } from '../components/Footer';
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
} from '../styles/shared';
import { NoImage, PostFull, PostFullHeader, PostFullTitle } from '../templates/post';

const PageTemplate = css`
  .site-main {
    margin-top: 64px;
    padding-bottom: 4vw;
    background: #fff;
  }
`;
const page_name = "Contact";
const page_desc = "Please feel free to leave any questions, feedback or  report typos, grammatical errors, or any other types of inaccuracies in the blog.Your help will prove invaluable to make this blog more reliable and accurate.";
const Contact: React.FC = () => (
  <IndexLayout>
    <Helmet>
      <title>{`${page_name} | ${config.title}`}</title>
      <meta name="description" content={page_desc} />
      <meta property="og:site_name" content={config.title} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={`${page_name} | ${config.title}`} />
      <meta property="og:description" content={page_desc} />
      <meta property="og:url" content={config.siteUrl+'/'+page_name.toLowerCase()} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`${page_name} | ${config.title}`} />
      <meta name="twitter:description" content={page_desc} />
      <meta name="twitter:url" content={config.siteUrl+'/'+page_name.toLowerCase()} />
    </Helmet>
    <Wrapper css={PageTemplate}>
      <header className="site-archive-header no-image" css={[SiteHeader, SiteArchiveHeader]}>
        <div css={[outer, SiteNavMain]}>
          <div css={inner}>
            <SiteNav isContact={true} />
          </div>
        </div>
      </header>
      <main id="site-main" className="site-main" css={[SiteMain, outer]}>
        <div css={inner}>
          <article className="post page" css={[PostFull, NoImage]}>
            <PostFullHeader className="post-full-header">
              <PostFullTitle className="post-full-title">Contact</PostFullTitle>
            </PostFullHeader>

            <PostFullContent className="post-full-content">
              <div className="post-content">
                <h5>Questions / Feedback</h5>
                <p>
                  If you are interested in my work, have a question, or want to leave a feedback, please feel free to contact me via <a href="mailto:bsoyuj@gmail.com">mail</a>. I am also available on <a href="https://twitter.com/basnetsoyuj" target="_blank">Twitter</a>.
                </p>
                <h5>Report Issues</h5>
                <p>If you want to report typos, grammatical errors, or any other types of inaccuracies in the blog, please open an issue <a href="https://github.com/basnetsoyuj/personal-website/issues/new" target="_blank">here</a>. Your help will prove invaluable to make this blog more reliable and accurate.</p>
              </div>
            </PostFullContent>
          </article>
        </div>
      </main>
      <Footer />
    </Wrapper>
  </IndexLayout>
);

export default Contact;
