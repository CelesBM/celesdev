import styled from "styled-components";
import { motion } from "framer-motion";

export const ContainerProjectsStyled = styled.div`
  margin-top: 90px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
  gap: 80px;

  @media (min-width: 768px) {
    padding: 50px;
  }

  @media (min-width: 1010px) {
    padding: 70px;
    gap: 100px;
  }

  h6 {
    font-size: 13px;
    line-height: 20px;
    color: white;
    font-weight: 100;
    text-align: center;
  }

  @media (min-width: 500px) {
    h6 {
      font-size: 14px;
    }
  }

  @media (min-width: 650px) {
    h6 {
      font-size: 15px;
      line-height: 22px;
    }
  }

  @media (min-width: 1010px) {
    h6 {
      font-size: 17px;
      line-height: 24px;
    }
  }

  @media (min-width: 1085px) {
    h6 {
      font-size: 18px;
      line-height: 28px;
    }
  }
`;
export const ContainerProjectStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
  gap: 30px;

  @media (min-width: 1010px) {
    gap: 50px;
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

  a {
    cursor: pointer;
    color: #00c5e4;
    font-size: 13px;
    text-decoration: none;
    text-align: center;
  }

  @media (min-width: 500px) {
    a {
      font-size: 14px;
    }
  }

  @media (min-width: 650px) {
    a {
      font-size: 15px;
      line-height: 22px;
    }
  }

  @media (min-width: 1010px) {
    a {
      font-size: 17px;
      line-height: 24px;
    }
  }

  @media (min-width: 1085px) {
    a {
      font-size: 18px;
      line-height: 28px;
    }
  }

  h5 {
    font-size: 13px;
    line-height: 20px;
    color: white;
    text-align: center;
  }
  @media (min-width: 500px) {
    h5 {
      font-size: 14px;
    }
  }

  @media (min-width: 650px) {
    h5 {
      font-size: 15px;
      line-height: 22px;
    }
  }

  @media (min-width: 1010px) {
    h5 {
      font-size: 17px;
      line-height: 24px;
    }
  }

  @media (min-width: 1085px) {
    h5 {
      font-size: 18px;
      line-height: 28px;
    }
  }

  span {
    color: #af7135;
    font-weight: bold;
  }

  img {
    width: 100%;
    border-radius: 10px;
  }

  @media (min-width: 500px) {
    img {
      width: 90%;
    }
  }

  @media (min-width: 900px) {
    img {
      width: 80%;
    }
  }
`;

export const MotionDivStyled = styled(motion.div)`
  display: flex;
  align-items: center;
`;
