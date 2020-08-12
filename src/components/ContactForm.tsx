import React from 'react';
import { navigate } from 'gatsby-link';
import { css } from '@emotion/core';
import { colors } from '../styles/colors';
import { lighten } from 'polished';
import { SubscribeFormButton } from './subscribe/SubscribeForm';

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

export default function ContactForm() {
  const [state, setState] = React.useState({});

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error));
  };

  return (
    <form
      name="contact"
      method="post"
      action="/thank-you/"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      css={formCss}
    >
      <input type="hidden" name="form-name" value="contact" />
      <div css={nameEmail}>
        <div css={name}>
          <label for="contact-name">Name</label>
          <input
            required
            placeholder="Enter your name"
            type="text"
            className="search-input"
            name="name"
            id="contact-name"
            maxLength={128}
            css={inputCss}
            onChange={handleChange}
          />
        </div>
        <div css={email}>
          <label for="contact-email">E-mail</label>
          <input
            required
            placeholder="Enter Email Address"
            type="email"
            className="search-input"
            name="email"
            id="contact-email"
            css={inputCss}
            onChange={handleChange}
          />
        </div>
      </div>
      <div css={reasonCss}>
        <label for="contact-reason">Subject</label>
        <select
          required
          name="reason"
          onChange={handleChange}
          id="contact-reason"
          css={inputCss}
          className="search-input"
        >
          <option selected disabled>
            Choose An Option
          </option>
          <option value="feedback">Feedback/Suggestion</option>
          <option value="report">Report Bugs/Blog Issues</option>
          <option value="project">Projects Ideas/Job</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div>
        <label for="contact-message">Message</label>
        <textarea
          required
          placeholder="Enter Message"
          name="message"
          id="contact-message"
          css={messageCss}
          onChange={handleChange}
        ></textarea>
      </div>
      <SubscribeFormButton type="submit" className="subButton" css={{ margin: '0' }}>
        <span>Send</span>
      </SubscribeFormButton>
    </form>
  );
}
const inputCss = css`
  display: block;
  padding: 10px;
  width: 100%;
  /* border: color(var(--lightgrey) l(+7%)) 1px solid; */
  border: ${lighten('0.07', colors.lightgrey)} 1px solid;
  /* color: var(--midgrey); */
  color: ${colors.midgrey};
  font-size: 1.7rem;
  line-height: 1.2em;
  font-weight: normal;
  user-select: text;
  border-radius: 5px;
  transition: border-color 0.15s linear;

  -webkit-appearance: none;

  :focus {
    outline: 0;
    /* border-color: color(var(--lightgrey) l(-2%)); */
    border-color: ${lighten('-0.02', colors.lightgrey)};
  }
`;

const nameEmail = css`
  display: flex;
  width: 100%;
  @media (max-width: 700px) {
    display: block;
  }
`;

const name = css`
  display: block;
  width: 47.5%;
  padding-right: 2.5%;
  @media (max-width: 700px) {
    padding: unset;
    width: 100%;
  }
  margin-bottom: 15px;
`;

const email = css`
  display: block;
  width: 47.5%;
  padding-left: 2.5%;
  @media (max-width: 700px) {
    padding: unset;
    width: 100%;
  }
  margin-bottom: 15px;
`;

const formCss = css`
  width: 100%;

  label {
    font-size: 14px;
    line-height: 20px;
  }
`;

const reasonCss = css`
  margin-bottom: 15px;
  select {
    line-height: 1.2em;
  }
`;
const messageCss = css`
  display: block;
  padding: 10px;
  height: 125px;
  width: 100%;
  /* border: color(var(--lightgrey) l(+7%)) 1px solid; */
  border: ${lighten('0.07', colors.lightgrey)} 1px solid;
  /* color: var(--midgrey); */
  color: ${colors.midgrey};
  font-size: 1.7rem;
  font-weight: normal;
  user-select: text;
  border-radius: 5px;
  transition: border-color 0.15s linear;

  -webkit-appearance: none;

  :focus {
    outline: 0;
    /* border-color: color(var(--lightgrey) l(-2%)); */
    border-color: ${lighten('-0.02', colors.lightgrey)};
  }

  margin-bottom: 15px;
`;
