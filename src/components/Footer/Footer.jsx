import React from "react";
import {
  ContainerFooterStyled,
  InfoContainerStyled,
  SocialMediaContainerStyled,
  SocialMediaStyled,
} from "./FooterStyles";

const Footer = () => {
  return (
    <>
      <ContainerFooterStyled>
        <InfoContainerStyled>
          <p>Celeste B. Montero</p>
          <p>Desarrolladora FullStack</p>
        </InfoContainerStyled>
        <SocialMediaContainerStyled>
          <SocialMediaStyled>
            <a href="https://wa.link/eowvmb" target="_blank">
              <img
                src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-whatsapp-phone-icon-png-image_6315989.png"
                alt="whatsapp"
              />
              <p>11-5503-1316</p>
            </a>
          </SocialMediaStyled>
          <SocialMediaStyled>
            <a
              href="https://www.linkedin.com/in/celestemontero/"
              target="_blank"
            >
              <img
                src="https://c0.klipartz.com/pngpicture/753/965/gratis-png-linkedin.png"
                alt="linkedin"
              />
              <p>/celestemontero/</p>
            </a>
          </SocialMediaStyled>
          <SocialMediaStyled>
            <a href="mailto:celesbmontero@hotmail.com" target="_blank">
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/010/056/094/small_2x/email-and-mail-icon-sign-symbol-design-free-png.png"
                alt="email"
              />
              <p>
                celesbmontero <br /> @hotmail.com
              </p>
            </a>
          </SocialMediaStyled>
        </SocialMediaContainerStyled>
      </ContainerFooterStyled>
    </>
  );
};

export default Footer;
