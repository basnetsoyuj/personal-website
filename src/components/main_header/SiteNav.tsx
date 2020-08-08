import { Link } from 'gatsby';
import { darken } from 'polished';
import React from 'react';

import { css } from '@emotion/core';
import styled from '@emotion/styled';

import { colors } from '../../styles/colors';
import { SocialLink, SocialLinkFb } from '../../styles/mainShared';
import config from '../../website-config';
import { Facebook } from '../icons/facebook';
import { Twitter } from '../icons/twitter';
import { SiteNavLogo } from './SiteNavLogo';
import DarkModeToggle from '../DarkModeToggle';

interface SiteNavProps {
  isHome?: boolean;
  isContact?: boolean;
  isAbout?: boolean;
}
class SiteNav extends React.Component<SiteNavProps> {

  render(): JSX.Element {
    const { isContact=false, isAbout = false} = this.props;
    return (
      <nav css={SiteNavStyles} className="mainNav">
        <SiteNavLeft className="site-nav-left">
          <SiteNavLogo />
          <SiteNavContent>
            <ul css={NavStyles} role="menu" className="mainNavUl">
              {/* TODO: mark current nav item - add class nav-current */}
              <li role="menuitem">
                <Link to="/blog">Blog</Link>
              </li>
              <li role="menuitem" className={isAbout?'nav-current':''}>
                <Link to="/about">About</Link>
              </li>
              <li role="menuitem" className={isContact?'nav-current':''}>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </SiteNavContent>
        </SiteNavLeft>
        <DarkModeSiteNavRight className="svgNav">
          <div css={darkmodeButton} className="darkModeBtn">
            <DarkModeToggle />
          </div>
        </DarkModeSiteNavRight>
        <SiteNavRight className="svgNav">
          <SocialLinks>
            {config.facebook && (
              <a
                className="social-link-fb"
                css={[SocialLink, SocialLinkFb]}
                href={config.facebook}
                target="_blank"
                title="GitHub"
                rel="noopener noreferrer"
              >
                <Facebook />
              </a>
            )}
            {config.twitter && (
              <a
                css={SocialLink}
                href={config.twitter}
                title="Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter/>
              </a>
            )}
          </SocialLinks>
          <div css={darkmodeButton} className="svgNav">
            <DarkModeToggle />
          </div>
        </SiteNavRight>
      </nav>
    );
  }
}

const SiteNavStyles = css`
  position: relative;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  overflow-y: hidden;
  height: 64px;
  font-size: 1.3rem;
`;

const SiteNavLeft = styled.div`
  flex: 1 0 auto;
  display: flex;
  align-items: center;
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  margin-right: 10px;
  padding: 10px 0 80px;
  font-weight: 500;
  letter-spacing: 0.2px;
  text-transform: uppercase;
  white-space: nowrap;

  -ms-overflow-scrolling: touch;

  @media (max-width: 700px) {
    margin-right: 0;
    padding-left: 5vw;
  }
`;

const SiteNavContent = styled.div`
  position: relative;
  align-self: flex-start;
`;

const NavStyles = css`
  position: absolute;
  z-index: 1000;
  display: flex;
  margin: 0 0 0 -12px;
  padding: 0;
  list-style: none;
  transition: all 1s cubic-bezier(0.19, 1, 0.22, 1);

  li {
    display: block;
    margin: 0;
    padding: 0;
  }

  li a {
    position: relative;
    display: block;
    padding: 12px 12px;
    color: #000 !important;
    opacity: 0.8;
    transition: opacity 0.35s ease-in-out;
  }

  li a:hover {
    text-decoration: none;
    opacity: 1;
  }

  li a:before {
    content: '';
    position: absolute;
    right: 100%;
    bottom: 8px;
    left: 12px;
    height: 1px;
    background: #000;
    opacity: 0.25;
    transition: all 0.35s ease-in-out;
  }

  li a:hover:before {
    right: 12px;
    opacity: 0.5;
  }
  .nav-current a{
    opacity: 1;
    font-weight: 700;
  }
`;

const darkmodeButton = css`
  position: relative;
  display: block;
  fill: #000;
  opacity: 0.8;
  transition: opacity 0.35s ease-in-out;
  :hover {
    text-decoration: none;
    opacity: 1;
  }
`;

const SiteNavRight = styled.div`
  flex: 0 1 auto;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 10px 0;
  height: 64px;

  @media (max-width: 700px) {
    display: none;
  }
`;

const DarkModeSiteNavRight = styled.div`
  flex: 0 1 auto;
  display: none;
  align-items: center;
  justify-content: flex-end;
  padding: 10px 0;
  margin: 0 7px;
  height: 64px;

  @media (max-width: 700px) {
    display: flex;
  }
`;
const SocialLinks = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
`;
export default SiteNav;
