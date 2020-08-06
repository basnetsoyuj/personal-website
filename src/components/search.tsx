import React, { Component } from 'react';
import { Index } from 'elasticlunr';
import { PostCard } from './PostCard';
import { PostFeed } from '../styles/shared';
import { css } from '@emotion/core';
import { colors } from '../styles/colors';
import { lighten } from 'polished';

// Search component
export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ``,
      results: [],
    };
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.query}
          className="search-input"
          onChange={this.search}
          css={inputCss}
          placeholder="Enter search keywords & tag names..."
        />
        <div css={[PostFeed]} className="post-feed">
          {this.state.results.map(page => (
            <PostCard key={page.node.fields.slug} post={page.node} noImage />
          ))}
        </div>
      </div>
    );
  }
  getOrCreateIndex = () =>
    this.index
      ? this.index
      : // Create an elastic lunr index and hydrate with graphql query results
        Index.load(this.props.searchIndex);

  search = evt => {
    const query = evt.target.value;
    this.index = this.getOrCreateIndex();
    this.setState({
      query,
      // Query the index with search string to get an [] of IDs
      results: this.index
        .search(query, { expand: true })
        // Map over each ID and return the full document
        .map(({ ref }) => this.index.documentStore.getDoc(ref)),
    });
  };
}

const inputCss = css`
  display: block;
  padding: 10px;
  width: 100%;
  /* border: color(var(--lightgrey) l(+7%)) 1px solid; */
  border: ${lighten('0.07', colors.lightgrey)} 1px solid;
  /* color: var(--midgrey); */
  color: ${colors.midgrey};
  font-size: 1.8rem;
  line-height: 1em;
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
