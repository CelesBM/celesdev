import styled from "styled-components";
import { Link } from "react-router-dom";

export const ContainerSocialStyled = styled.div`
  margin-top: 90px;
  padding: 40px 30px;
  display: flex;
  flex-direction: column;
  gap: 50px;

  @media (min-width: 500px) {
    padding: 40px 40px;
    gap: 80px;
  }

  @media (min-width: 650px) {
    padding: 50px 50px;
  }

  @media (min-width: 1010px) {
    gap: 110px;
    padding: 60px 60px;
  }

  @media (min-width: 1085px) {
    padding: 100px 120px;
  }

  p {
    font-size: 13px;
    line-height: 20px;
    color: white;
    text-align: justify;
  }

  @media (min-width: 500px) {
    p {
      font-size: 14px;
    }
  }

  @media (min-width: 650px) {
    p {
      font-size: 15px;
      line-height: 22px;
    }
  }

  @media (min-width: 1010px) {
    p {
      font-size: 17px;
      line-height: 24px;
    }
  }

  @media (min-width: 1085px) {
    p {
      font-size: 18px;
      line-height: 28px;
    }
  }
`;

export const ContainerPagesStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (min-width: 650px) {
    gap: 50px;
  }

  @media (min-width: 768px) {
    flex-direction: row;
  }

  @media (min-width: 1010px) {
    gap: 80px;
    padding: 0px 50px;
  }
`;

export const SocialStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  span {
    color: #af7135;
    font-weight: bold;
  }

  img {
    width: 50px;
    border-radius: 23px;
  }

  @media (min-width: 650px) {
    img {
      width: 70px;
      border-radius: 28px;
    }
  }

  @media (min-width: 1010px) {
    img {
      width: 90px;
      border-radius: 45px;
    }
  }
`;

export const LinkStyled = styled(Link)``;
