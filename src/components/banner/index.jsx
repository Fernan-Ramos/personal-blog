import React from 'react';
import { Link } from 'gatsby';
import { scale } from '../../utils/typography';
import { Wrapper, WrapperContent } from './styles';

const Banner = ({ title, description, boldTitle }) => {
  return (
    <Wrapper>
      <WrapperContent>
        <header>
          <h1>
            <Link to="/">
              {title}
              <span>{boldTitle}</span>
            </Link>
          </h1>
          <h3>{description}</h3>
        </header>
      </WrapperContent>
    </Wrapper>
  );
};

export default Banner;
