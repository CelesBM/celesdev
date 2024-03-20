import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import {
  ContainerProjectsStyled,
  ContainerProjectStyled,
  MotionDivStyled,
} from "./ProjectsStyles";

const Projects = () => {
  return (
    <>
      <Header />
      <ContainerProjectsStyled>
        <h6>
          Welcome to my projects section! I am pleased to share with you a
          sample of the projects I have worked on with effort and dedication.
          Throughout my career as a programmer, I have had the opportunity to
          carry out a variety of projects ranging from responsive web pages to
          online games. Each project represents a unique challenge that I have
          approached with creativity and an approach focused on quality and
          efficiency. I am excited to introduce you to some of these works,
          which reflect my experience and skills in the field of web and
          software development. Thank you for your interest and I hope you enjoy
          my work!
        </h6>
        <ContainerProjectStyled>
          <MotionDivStyled
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1.2 }}
          >
            <a
              href="https://sports-supplements-page.vercel.app/"
              target="_blank"
            >
              <img src="supplements.jpg" alt="1" />
            </a>
          </MotionDivStyled>
          <p>
            This is a freelance project where I made a website for purchasing
            sports supplements. Built with React.js, this platform is fast,
            responsive, and easy to navigate. Thanks to the use of hooks,
            context and Redux Toolkit, a robust and scalable application
            architecture has been created. This allows status to be managed
            efficiently, providing a seamless user experience and fluid
            navigation between different sections of the store. In turn, a
            contact form was created, implemented with Formik and Yup,
            guaranteeing direct and effective communication with our clients,
            with real-time data validation for an error-free experience. On the
            other hand, with the cart logic implemented you can easily add or
            delete products, and see a clear summary of the order at any time.
            Additionally, a modal has been incorporated that is activated to
            alert you about important actions, such as adding a product to the
            cart or completing a purchase.
          </p>
          <h5>
            <span>Skills:</span> Javascript | React JS | HTML | CSS | Styled
            components
          </h5>
        </ContainerProjectStyled>
        <ContainerProjectStyled>
          <MotionDivStyled
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1.2 }}
          >
            <a href="https://github.com/CelesBM/desafio-m5" target="_blank">
              <img src="gameonline.jpg" alt="2" />
            </a>
          </MotionDivStyled>
          <p>
            The classic game "Rock, Paper and Scissors" online. Developed with
            modern technologies such as TypeScript, HTML and CSS, this game
            offers an interactive and immersive experience for players of all
            ages. Using the power of TypeScript, we've created a robust,
            object-oriented framework for the game. Every element of the game,
            from the underlying logic to the user interface, is carefully
            designed and organized for easy understanding and maintenance. The
            user interface, designed with HTML and styled with CSS, is intuitive
            and attractive. For smooth navigation between the different game
            screens, we have implemented a routing system using Parcel. This
            allows players to move seamlessly between the home screen, game
            screen and results screen, always maintaining a cohesive and
            seamless experience. Additionally, I take advantage of the ability
            of HTML Custom Elements to create reusable and modular components.
            This not only makes development easier, but also ensures clean,
            maintainable code. Last but not least, we have incorporated a robust
            state system that efficiently manages the game logic and keeps the
            UI in sync. Thanks to this, every movement of the player is
            instantly reflected on the screen, providing a smooth and seamless
            gaming experience.
          </p>
          <h5>
            <span>Skills:</span> Typescript | CSS | HTML
          </h5>
        </ContainerProjectStyled>
        <ContainerProjectStyled>
          <MotionDivStyled
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1.2 }}
          >
            <a href="https://dancewear-landing.vercel.app/" target="_blank">
              <img src="dancewear.jpg" alt="3" />
            </a>
          </MotionDivStyled>
          <p>
            This project is about an e-commerce page selling ballet clothing.
            Developed with JavaScript, HTML and CSS, it offers an intuitive and
            attractive shopping experience. This page has navigation and search
            functionalities to facilitate the search for specific products or
            categories of interest.
          </p>
          <h5>
            <span>Skills:</span> Javascript | React JS | HTML | CSS
          </h5>
        </ContainerProjectStyled>
        <ContainerProjectStyled>
          <MotionDivStyled
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1.2 }}
          >
            <a
              href="https://github.com/CelesBM/Proyect-app-movies-TS"
              target="_blank"
            >
              https://github.com/CelesBM/Proyect-app-movies-TS
            </a>
          </MotionDivStyled>
          <p>
            Application of movies, which receive arguments through the terminal
            and the list of them is shown based on the past arguments. <br />
            Architecture: -index.ts Receive arguments, processes them and
            delegates the actions to pelis.ts. -pelis.ts Reads the JSON file and
            exposes functions to interact with the data. pelis.json Collection
            of movies.
            <br /> Possible scenarios: -No parameters The application returns
            all the movies. -Sort The application sorts the output based on that
            parameter, for example, in alphabetical order based on its title.
            -Search The application returns movies that have the plot text, for
            example, films that have a certain tag. -No Format The application
            returns the entire JSON of the answer. All arguments can be
            combined. Project Movie application, created this time from
            Typescript in instead of Javascript, using tests and adding the
            function add new movies.
          </p>
          <h5>
            <span>Skills:</span> Typescript | Node js.
          </h5>
        </ContainerProjectStyled>
        <h6>
          These are some of my projects that I am proud of. If you are
          interested in seeing more, I invite you to visit my github where I
          have many works to show you
        </h6>
      </ContainerProjectsStyled>
      <Footer />
    </>
  );
};

export default Projects;
