import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import {
  ContainerSocialStyled,
  ContainerPagesStyled,
  SocialStyled,
} from "./SocialStyles";

const Social = () => {
  return (
    <>
      <Header />
      <ContainerSocialStyled>
        <p>
          In this section, I would love to share with you the platforms where
          you can learn about my career as a programmer and my projects. Here
          are some of my main pages where you can explore all my content:
        </p>
        <ContainerPagesStyled>
          <SocialStyled>
            <a href="https://www.github.com/CelesBM/" target="_blank">
              <img
                src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                alt="github"
              />
            </a>
            <p>
              On my <span>LinkedIn</span> profile, you will find my career path,
              featured skills, and recommendations from colleagues. It's a great
              place to connect professionally and discover more about my
              experience in the field of web development.
            </p>
          </SocialStyled>
          <SocialStyled>
            <a
              href="https://www.linkedin.com/in/celestemontero/"
              target="_blank"
            >
              <img
                src="https://c0.klipartz.com/pngpicture/753/965/gratis-png-linkedin.png"
                alt="linkedin"
              />
            </a>
            <p>
              On my <span>Github</span> profile, you can explore all my open
              source projects, contributions to community projects, and see my
              coding style. It's the perfect place to immerse yourself in my
              technical work and see how I approach different development
              challenges.
            </p>
          </SocialStyled>
        </ContainerPagesStyled>
        <p>
          I hope to see you soon on one of my pages! If you have any questions
          or want to collaborate on a project, do not hesitate to contact me.
        </p>
      </ContainerSocialStyled>
      <Footer />
    </>
  );
};

export default Social;
