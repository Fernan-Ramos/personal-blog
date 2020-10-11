import React from 'react';
import { Link } from 'gatsby';
import { scale } from '../../utils/typography';
import { Wrapper, WrapperContent } from './styles';

const Banner = ({ title }) => {
  return (
    <Wrapper>
      <WrapperContent>
        <header>
          <h1
            style={{
              ...scale(1.5),
              marginTop: 0,
            }}
          >
            <Link to="/">{title}</Link>
          </h1>
        </header>
      </WrapperContent>
    </Wrapper>
  );
};

export default Banner;
