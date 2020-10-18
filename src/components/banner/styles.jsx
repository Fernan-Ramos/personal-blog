import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: black;
  height: 500px;
  background-image: url('/images/banner-image.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  header {
    color: white;
    text-align: center;
    font-family: 'Montserrat, sans-serif';
    a {
      box-shadow: none;
      text-decoration: none;
      color: inherit;
    }
  }
`;

export const WrapperContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
