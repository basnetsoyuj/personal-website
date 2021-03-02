import { useEffect } from 'react';
import React from 'react';
import { css } from '@emotion/core';

const Comment = ({ commentBox, theme }) => {
  useEffect(() => {
    const scriptEl = document.createElement('script');
    scriptEl.async = true;
    scriptEl.src = 'https://utteranc.es/client.js';
    scriptEl.setAttribute('repo', 'basnetsoyuj/personal-website');
    scriptEl.setAttribute('issue-term', 'title');
    scriptEl.setAttribute('label', 'comment 💬');
    scriptEl.setAttribute('id', 'utterances');
    scriptEl.setAttribute('theme', `github-${theme ? 'dark' : 'light'}`);
    scriptEl.setAttribute('crossorigin', 'anonymous');
    if (commentBox && commentBox.current) {
      commentBox.current.appendChild(scriptEl);
    } else {
      console.log(`Error adding utterances comments on: ${commentBox}`);
    }
  }, []);

  return (
    <>
      <hr className="h_rule" />
      <h4 css={h4style}>COMMENTS</h4>
      <div ref={commentBox} className="comments"></div>
    </>
  );
};

const h4style = css`
  margin: 0 20px;
`;

export default Comment;
