import React from 'react';
import styled from '@emotion/styled';
import config from '../website-config';
import { Twitter } from './icons/twitter';
import { Fb } from './icons/fb';
import { LinkedIn } from './icons/linkedin';

export interface ShareSocialLinkProps {
  props: any;
};

export const ShareSocialLink: React.FC<ShareSocialLinkProps> = ({ props }) => {
  const post = props.data.markdownRemark;
  const author = post.frontmatter.author[0];
  return (
    <Share className="share-social-link">
      <ShareLabel>Share this post</ShareLabel>
      <ShareSocial>
        <ShareItem>
          <ShareLink
            href={`https://twitter.com/intent/tweet/?text=${
              post.frontmatter.title
              }&url=${config.siteUrl}${props.pathContext.slug.slice(0, -1)}%2F&via=${author.twitter}`}
            target="_blank"
          >
            <Twitter />
            <LinkLabel>Share on Twitter</LinkLabel>
          </ShareLink>
        </ShareItem>

        <ShareItem>
          <ShareLink
            href={`https://www.facebook.com/sharer/sharer.php?u=${config.siteUrl}${props.pathContext.slug.slice(0, -1)}`}
            target="_blank"
          >
            <Fb />
            <LinkLabel>Share on Facebook</LinkLabel>
          </ShareLink>
        </ShareItem>


        <ShareItem>
          <ShareLink
            href={`https://www.linkedin.com/shareArticle?mini=true&url=${config.siteUrl}${props.pathContext.slug.slice(0, -1)}&title=${post.frontmatter.title}&source=${post.frontmatter.title}`}
            target="_blank"
          >
            <LinkedIn />
            <LinkLabel>Share on LinkedIn</LinkLabel>
          </ShareLink>
        </ShareItem>
        <div style={{ clear: "both" }}></div>
      </ShareSocial>
    </Share>
  );
};

const Share = styled.div`
margin:0;
padding:0;
`;
const ShareItem = styled.div`
float:left;
`;
const ShareLink = styled.a`
margin: 0;
opacity: 0.8;
margin:0 10px;
:hover {
  opacity: 1;
}
svg {
  height: 2.2rem;
  fill: #000;
}
`;
const ShareLabel = styled.div`
margin: 0;
padding: 0 0 2px 0;
border: 0;
font: inherit;
font-size: 1.5rem;
font-weight:500;
vertical-align: baseline;
letter-spacing: 0.2px;
text-transform: uppercase;
`;

const ShareSocial = styled.div``;

const LinkLabel = styled.span`
  display: none;
`;

export default ShareSocialLink;