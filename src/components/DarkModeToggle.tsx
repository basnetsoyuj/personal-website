import React from 'react';
import SunIcon from './icons/sun-icon';
import MoonIcon from './icons/moon-icon';
import styled from '@emotion/styled';

import ThemeContext from '../context/ThemeContext';

const Button = styled.button`
  background-color: transparent;
  outline: none;
`;
const SunIconWrapper = styled.div`
  &&& {
    & > svg {
      height: 1.9rem;
    }
  }
`;
const MoonIconWrapper = styled.div`
  &&& {
    & > svg {
      height: 1.7rem;
      margin-left: 0.2rem;
    }
  }
`;

const DarkModeToggle = () => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <Button className="rss-button" onClick={theme.toggleDark} title="DarkMode">
          {theme.dark ? (
            <SunIconWrapper>
              <SunIcon />
            </SunIconWrapper>
          ) : (
            <MoonIconWrapper>
              <MoonIcon />
            </MoonIconWrapper>
          )}
        </Button>
      )}
    </ThemeContext.Consumer>
  );
};

export default DarkModeToggle;
