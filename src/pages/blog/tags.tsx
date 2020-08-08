import React from 'react';
import { graphql, Link} from 'gatsby';
import { Helmet } from 'react-helmet';

import { css } from '@emotion/core';

import { Footer } from '../../components/Footer';
import SiteNav from '../../components/header/SiteNav';
import { PostFullContent } from '../../components/PostContent';
import { Wrapper } from '../../components/Wrapper';
import IndexLayout from '../../layouts';
import config from '../../website-config';

import {
  inner,
  outer,
  SiteArchiveHeader,
  SiteHeader,
  SiteMain,
  SiteNavMain,
} from '../../styles/shared';
import { NoImage, PostFull, PostFullHeader, PostFullTitle } from '../../templates/post';

const _ = require('lodash');
const PageTemplate = css`
  .site-main {
    margin-top: 64px;
    padding-bottom: 4vw;
    background: #fff;
  }
`;
interface TagTemplateProps {
  data: {
    allMarkdownRemark: {
      nodes: Array<{
        frontmatter: {
          tags: Array<{
            tag: string;
          }>;
        };
      }>;
    };
  };
}

const page_name = "Tags";
const Tags: React.FC<TagTemplateProps> = (props) => {
  let counter={};
  for (let node of props.data.allMarkdownRemark.nodes){
    for (let tag of node.frontmatter.tags){
        if (tag in counter){
          counter[tag]++;
        }else{
          counter[tag]=1;
        }
    };
  };
  return (<IndexLayout>
    <Helmet>
      <title>{`${page_name} | ${config.blogTitle}`}</title>
      <meta name="description" content={config.description} />
      <meta property="og:site_name" content={config.title} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={`${page_name} | ${config.blogTitle}`} />
      <meta property="og:description" content={config.description} />
      <meta property="og:url" content={config.siteUrl + '/' + page_name.toLowerCase()} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`${page_name} | ${config.blogTitle}`} />
      <meta name="twitter:description" content={config.description} />
      <meta name="twitter:url" content={config.siteUrl + '/' + page_name.toLowerCase()} />
    </Helmet>
    <Wrapper css={PageTemplate}>
      <header className="site-archive-header no-image" css={[SiteHeader, SiteArchiveHeader]}>
        <div css={[outer, SiteNavMain]}>
          <div css={inner}>
            <SiteNav isTags={true} />
          </div>
        </div>
      </header>
      <main id="site-main" className="site-main" css={[SiteMain, outer]}>
        <div css={inner}>
          <article className="post page" css={[PostFull, NoImage]}>
            <PostFullHeader className="post-full-header">
              <PostFullTitle className="post-full-title">{page_name} 🏷️</PostFullTitle>
            </PostFullHeader>

            <PostFullContent className="post-full-content">
              <div className="post-content">
                {Object.keys(counter).sort().map(n=>{
                  return (<div className="tags-post" css={tagCss}><div className="tag">
                    <Link to={`/blog/tags/${_.kebabCase(n)}`}>
                      <span className="tagName">&nbsp;{n}&nbsp;</span>
                      <span className="number-of-post">&nbsp;{counter[n]}&nbsp;</span>
                    </Link></div><div className="clearFix"></div></div>);
                })}
                <div className="clearFix"></div>
              </div>
            </PostFullContent>
          </article>
        </div>
      </main>
      <Footer />
    </Wrapper>
  </IndexLayout>
);
};

export const tagCss = css`
  float: left;
  display: inline;
  font-weight: 500;
  .tag{
    margin: 1.3rem;
    letter-spacing: 2px;
    a, a:hover{
      background-color: #eee;
      box-shadow: none;
    }
    .tagName{
      padding: 2px;
      background-color: #e3e3e3;
      border-right: 0.75px solid #333;
    }
    .number-of-post{
      background-color: #eee;
      padding: 2px;
      border-left: 0.75px solid #333;
    }
}
`;

export const pageQuery = graphql`
query MyQuery {
  allMarkdownRemark(filter: {frontmatter: {draft: {ne: true}}}) {
    nodes {
      frontmatter {
        tags
      }
    }
  }
}

`;
export default Tags;
