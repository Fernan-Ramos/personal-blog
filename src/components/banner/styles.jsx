import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: black;
  height: 60vh;
  /* background-image: url('/images/banner-image.jpg'); */
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  border-bottom-left-radius: 200px;
  border-bottom-right-radius: 200px;
  header {
    color: white;
    text-align: left;
    font-family: 'Montserrat, sans-serif';
    padding: 20px;
    h1 {
      font-size: 60px;
      margin-bottom: 20px;
      margin-top: 0;
      span {
        color: #31aeda;
      }
    }
    h3 {
      margin-top: 0;
      color: #dfe1e5;
    }
    a {
      box-shadow: none;
      text-decoration: none;
      color: inherit;
    }
  }
  @media (max-width: 576px) {
    header {
      h1 {
        font-size: 50px;
      }
    }

    border-bottom-left-radius: 80px;
    border-bottom-right-radius: 80px;
  }
`;

export const WrapperContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
