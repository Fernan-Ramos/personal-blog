import React from 'react';
import { rhythm } from '../../utils/typography';
import Banner from '../banner';
import { Wrapper, Footer } from './styles';

const Layout = ({ location, title, children }) => {
  return (
    <Wrapper>
      <Banner title={title} location={location} />
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <main>{children}</main>
      </div>
      <Footer>© {new Date().getFullYear()}, Built with</Footer>
    </Wrapper>
  );
};

export default Layout;
