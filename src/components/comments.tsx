import { useEffect } from 'react';
import React from 'react';

const Comment = ({ commentBox }) => {
  useEffect(() => {
    const scriptEl = document.createElement('script');
    scriptEl.async = true;
    scriptEl.src = 'https://utteranc.es/client.js';
    scriptEl.setAttribute('repo', 'basnetsoyuj/personal-website');
    scriptEl.setAttribute('issue-term', 'title');
    scriptEl.setAttribute('label', 'comment :pencil:');
    scriptEl.setAttribute('id', 'utterances');
    if (localStorage.getItem('dark')) {
      scriptEl.setAttribute('theme', 'github-dark');
    } else {
      scriptEl.setAttribute('theme', 'github-light');
    }
    scriptEl.setAttribute('crossorigin', 'anonymous');
    if (commentBox && commentBox.current) {
      commentBox.current.appendChild(scriptEl);
    } else {
      console.log(`Error adding utterances comments on: ${commentBox}`);
    }
  }, []);
return <div ref={commentBox} className="comments"></div>;
};
export default Comment;
