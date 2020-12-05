import styled from 'styled-components';
import { Link } from 'gatsby';

export const Pagination = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 0;
  list-style: none;
  a {
    box-shadow: none;
  }
`;

export const Page = styled.li`
  margin: 0 5px;
`;

export const StyledArrow = styled(Link)`
  font-size: 23px;
  color: #31aeda;
`;

export const StyledLink = styled(Link)`
  padding: 10px 15px;
  border-radius: 4px;
  text-decoration: none;
  color: ${({ isActive }) => (isActive ? '#ffffff' : '#5a5a5a')};
  background: ${({ isActive }) => (isActive ? '#31aeda' : '')};
`;
