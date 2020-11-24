import React from 'react';
import { Link } from 'gatsby';
import { Wrapper, WrapperContent } from './styles';

const Banner = ({ description }) => {
  return (
    <Wrapper>
      <WrapperContent>
        <header>
          <h1>
            <Link to="/">
              La vida es una
              <span> lenteja</span>
            </Link>
          </h1>
          <h3>{description}</h3>
        </header>
      </WrapperContent>
    </Wrapper>
  );
};

export default Banner;
