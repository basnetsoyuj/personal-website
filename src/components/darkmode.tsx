import { colors } from '../styles/colors';
import { css } from '@emotion/core';
import { lighten } from 'polished';

export const darkTheme = css`
  /* layouts/index.tsx */
  color: rgba(255, 255, 255, 0.75);
  background: ${colors.darkmode} !important;

  img {
    opacity: 0.9;
  }

  /* templates/post.tsx */
  .site-main {
    /* background: var(--darkmode); */
    background: ${colors.darkmode} !important;
  }

  .post-full-custom-excerpt {
    /* color: color(var(--midgrey) l(+10%)); */
    color: ${lighten('0.1', colors.midgrey)};
  }

  .post-full-byline {
    /* border-top-color: color(var(--darkmode) l(+15%)); */
    border-top-color: ${lighten('0.15', colors.darkmode)};

    .post-full-byline-meta h4 a {
      color: rgba(255, 255, 255, 0.75);
    }

    .post-full-byline-meta h4 a:hover {
      color: #fff;
    }
  }

  .post-full-title {
    color: rgba(255, 255, 255, 0.9);
  }

  /* components/subscribe/subscribe.tsx */
  .subForm {
    border: none;
    /* background: linear-gradient(color(var(--darkmode) l(-6%)), color(var(--darkmode) l(-3%))); */
    background: linear-gradient(
      ${lighten('-0.06', colors.darkmode)},
      ${lighten('-0.03', colors.darkmode)}
    );

    p {
      color: rgba(255, 255, 255, 0.7);
    }

    h3 {
      color: rgba(255, 255, 255, 0.9);
    }
  }

  .subOverlay {
    p {
      color: rgba(255, 255, 255, 0.7);
    }
  }

  // subscribeform.tsx
  .form-group {
    input[type='email'] {
      /* border-color: color(var(--darkmode) l(+6%)); */
      border-color: ${lighten('0.06', colors.darkmode)};
      color: rgba(255, 255, 255, 0.9);
      /* background: color(var(--darkmode) l(+3%)); */
      background: ${lighten('0.03', colors.darkmode)};

      :focus {
        /* border-color: color(var(--darkmode) l(+25%)); */
        border-color: ${lighten('0.25', colors.darkmode)};
      }
    }
  }
  .subButton {
    opacity: 0.9;
  }

  //ShareSocialLink.tsx
  .share-social-link a {
    svg {
      fill: #fff;
    }
  }

  // pages/tags.tsx
  .tags-post {
    .tag a,
    a:hover {
      color: #333;
    }
  }

  // postContent.tsx
  .post-full-content {
    /* background: var(--darkmode); */
    background: ${colors.darkmode};

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      color: rgba(255, 255, 255, 0.9);
    }

    a {
      color: #fff;
      box-shadow: inset 0 -1px 0 #fff;
    }

    strong {
      color: #fff;
    }

    em {
      color: #fff;
    }

    code {
      color: #fff;
      // background: #000;
    }

    hr {
      /* border-top-color: color(var(--darkmode) l(+8%)); */
      border-top-color: ${lighten('0.08', colors.darkmode)};
    }

    figcaption {
      color: rgba(255, 255, 255, 0.6);
    }

    table td:first-of-type {
      /* background-image: linear-gradient(
        to right,
        var(--darkmode) 50%,
        color(var(--darkmode) a(0%)) 100%
      ); */
      background-image: linear-gradient(to right, ${colors.darkmode} 50%, ${colors.darkmode} 100%);
    }

    table td:last-child {
      /* background-image: linear-gradient(
        to left,
        var(--darkmode) 50%,
        color(var(--darkmode) a(0%)) 100%
      ); */
      background-image: linear-gradient(270deg, #191b1f 50%, rgba(25, 27, 31, 0));
    }

    table th {
      color: rgba(255, 255, 255, 0.85);
      /* background-color: color(var(--darkmode) l(+8%)); */
      background-color: ${lighten('0.08', colors.darkmode)};
    }

    table th,
    table td {
      /* border: color(var(--darkmode) l(+8%)) 1px solid; */
      border: ${lighten('0.08', colors.darkmode)} 1px solid;
    }

    .kg-bookmark-container,
    .kg-bookmark-container:hover {
      color: rgba(255, 255, 255, 0.75);
      box-shadow: 0 0 1px rgba(255, 255, 255, 0.9);
    }
  }

  // postCard.tsx
  .post-card {
    /* border-bottom-color: color(var(--darkmode) l(+8%)); */
    border-bottom-color: ${lighten('0.08', colors.darkmode)};
  }

  .post-card-title {
    color: rgba(255, 255, 255, 0.85);
  }

  .post-card-excerpt {
    /* color: color(var(--midgrey) l(+10%)); */
    color: ${lighten('0.1', colors.midgrey)} !important;
  }

  .post-card-byline-content {
    color: ${lighten('0.1', '#90a2aa')};
    a {
      color: rgba(255, 255, 255, 0.75);
    }
  }

  //shared.tsx
  .post-feed {
    background: ${colors.darkmode} !important;
  }

  .site-header-background {
    :before {
      background: rgba(0, 0, 0, 0.6);
    }
  }

  .author-image {
    box-shadow: 0 0 0 6px hsla(0, 0%, 100%, 0.04);
    background: ${colors.darkmode} !important;
  }

  .site-header-background {
    &:before {
      background: rgba(0, 0, 0, 0.6);
    }
    color: rgba(255, 255, 255, 0.9);
    /* background: var(--darkmode); */

    .site-header-content {
      /* border-bottom-color: color(var(--darkmode) l(+15%)); */
      border-bottom-color: ${lighten('0.15', colors.darkmode)};
    }

    .author-social-link a {
      color: rgba(255, 255, 255, 0.75);
    }
  }

  .author-card {
    /* background: color(var(--darkmode) l(+4%)); */
    background: ${lighten('0.04', colors.darkmode)};
    box-shadow: 0 12px 26px rgba(0, 0, 0, 0.4);

    :before {
      /* border-top-color: color(var(--darkmode) l(+4%)); */
      border-top-color: ${lighten('0.04', colors.darkmode)};
    }
  }

  .author-avatar {
    /* border-color: color(var(--darkgrey) l(+2%)); */
    border-color: ${lighten('0.02', colors.darkgrey)};
  }

  .author-profile-image {
    background: ${colors.darkmode} !important;
  }

  // toc
  .post-full-content aside {
    color: #bbb;
    background: rgb(21, 23, 26, 0.6);
  }

  .post-full-content aside a {
    box-shadow: none;
  }

  .h_rule {
    /* border-top-color: color(var(--darkmode) l(+8%)); */
    border-top-color: ${lighten('0.08', colors.darkmode)};
  }

  // for explore page
  .search-input, #contact-message {
    /* border-color: color(var(--darkmode) l(+6%)); */
    border-color: ${lighten('0.06', colors.darkmode)};
    color: rgba(255, 255, 255, 0.9);
    /* background: color(var(--darkmode) l(+3%)); */
    background: ${lighten('0.03', colors.darkmode)};

    :focus {
      /* border-color: color(var(--darkmode) l(+25%)); */
      border-color: ${lighten('0.25', colors.darkmode)};
    }
  }


  .mainSiteNavMain {
    background: #000;
  }
  .mainNav{
    .site-nav-logo {
      color: #fff;
    }
    .mainNavUl li a {
      color: #fff !important;
    }
    .mainNavUl li a:before {
      color: #fff !important;
    }
  
    .svgNav {
      svg {
        fill: #fff;
      }
    }
  }

  .mainSiteFooter {
    color: #fff;
    background: #000;

    div {
      color: rgba(255, 255, 255, 0.7);
      a {
        color: rgba(255, 255, 255, 0.7);
      }
      a:hover {
        color: rgba(255, 255, 255, 1);
      }
    }
  }

  .contactSocialLink{
    svg{
      fill: #fff;
    }
  }
`;
