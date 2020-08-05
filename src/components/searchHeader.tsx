import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import Search from './search';

const Header = () => (
  <StaticQuery
    query={graphql`
      query SearchIndexQuery {
        siteSearchIndex {
          index
        }
      }
    `}
    render={data => (
      <header>
        <Search searchIndex={data.siteSearchIndex.index} />
      </header>
    )}
  />
);

export default Header;
