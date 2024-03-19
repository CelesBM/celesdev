import styled from "styled-components";

export const ContainerFooterStyled = styled.div`
  background-color: #1d1d1d;
  width: 100%;
  height: 130px;
  display: flex;
  justify-content: space-between;
  padding: 0px 20px;
  border-top: solid 0.1rem #af7135;

  @media (min-width: 600px) {
    padding: 0px 30px;
  }

  @media (min-width: 800px) {
    height: 150px;
    padding: 0px 50px;
  }
`;

export const InfoContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  color: gray;
  font-size: 12px;

  @media (min-width: 600px) {
    font-size: 14px;
  }

  @media (min-width: 800px) {
    font-size: 16px;
  }
`;

export const SocialMediaContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
`;

export const SocialMediaStyled = styled.div`
  display: flex;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    text-decoration: none;
    color: gray;
  }

  img {
    border-radius: 7px;
    width: 25px;
    height: 25px;
    margin-right: 5px;
  }

  @media (min-width: 800px) {
    img {
      width: 30px;
      height: 30px;
      margin-right: 10px;
    }
  }

  p {
    font-size: 12px;
  }

  @media (min-width: 600px) {
    p {
      font-size: 14px;
    }
  }

  @media (min-width: 800px) {
    p {
      font-size: 16px;
    }
  }
`;
