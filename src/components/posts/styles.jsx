import { Link } from 'gatsby';
import styled from 'styled-components';
import { rhythm } from '../../utils/typography';
export const SearchBar = styled.div`
  display: flex;
  border: 1px solid #dfe1e5;
  border-radius: 10px;
  margin: 0 auto ${rhythm(1)};
  width: 100%;
  height: 3rem;
  background: #fdfdfd;

  svg {
    margin: auto 1rem;
    height: 20px;
    width: 20px;
    color: #9aa0a6;
    fill: #9aa0a6;
  }

  input {
    display: flex;
    flex: 100%;
    height: 100%;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue',
      Arial, sans-serif;
    font-size: 16px;
    background-color: transparent;
    border: none;
    margin: 0;
    padding: 0;
    padding-right: 0.5rem;
    color: rgb(55, 53, 47);
    word-wrap: break-word;
    outline: none;
  }
`;

export const StyledLink = styled(Link)`
  color: black;
  box-shadow: none;
  :hover {
    color: #31aeda;
  }
`;

export const StyledDate = styled.small`
  color: #5a5a5a;
`;
