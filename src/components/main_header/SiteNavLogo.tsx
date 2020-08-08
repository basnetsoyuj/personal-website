import { Link } from 'gatsby';
import React from 'react';
import { css } from '@emotion/core';


export const SiteNavLogo = () => (
<Link className="site-nav-logo" css={SiteNavLogoStyles} to="/">
  <h1>
    soyuj<span>jung</span>basnet
  </h1>
</Link>
);

const SiteNavLogoStyles = css`
  position: relative;
  z-index: 100;
  flex-shrink: 0;
  display: inline-block;
  margin-right: 32px;
  padding: 12px 0;
  color: #000;
  font-size: 1.7rem;
  line-height: 1.8rem;
  font-weight: bold;
  letter-spacing: -0.5px;
  text-transform: none;

  :hover {
    text-decoration: none;
  }

  img {
    display: inline-block;
    width: auto;
    height: 30px;
    margin-right: 10px;
  }
  h1 {
    display: inline-block;
    font-size: 2.5rem;
    font-weight: 400;
    line-height: 0.75;
    letter-spacing: 0.05rem;
    span {
      font-weight: 700;
      // color: rgb(14, 30, 37);
    }

    @media(max-width:600px){
      font-size:20px;
    }
  }
`;
