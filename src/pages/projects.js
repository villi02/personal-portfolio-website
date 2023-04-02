import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/projectPage/ProjectCards";
import leaf from "../assets/img/instagramIcon.svg";  //"./assets/img/instagramIcon.svg";
import emotion from "../assets/img/instagramIcon.svg";
import editor from "../assets/img/instagramIcon.svg";
import demostockpic from "../assets/img/StockAppImg/demopic.png";
import suicide from "../assets/img/instagramIcon.svg";
import warGamesPic from "../assets/img/projects/runeescape.png";
import webSitePic from "../assets/img/projects/websitepic.png";
import memegenimg from "../assets/img/projects/memegenimg.jpeg";
import stockimg from"../assets/img/projects/stockimg.jpeg";


function Projects() {
  return (
    
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={demostockpic}
              isBlog={false}
              title="Dividend Diary"
              description="An IOS app built for tracking dividend oriented portfolio. The app is built with Swift for the frontend, firebase for backend and financialmodelingprep API for live stock data. Built as the final project for CS50x, an online course taught by Harvard University"
              ghLink="https://github.com/villi02/CS50x/tree/main/Final%20project/DivDiary"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={warGamesPic}
              isBlog={false}
              title="Wargames"
              description="A war simulator game, allowing players to create armies from predefined solider classes. My solution for the project know as 'Wargames' for the subject IDATT2001 at NTNU"
              ghLink="https://github.com/villi02/Wargames"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={webSitePic}
              isBlog={false}
              title="Portfolio-website"
              description="My personal portfolio website (this website). Written in JavaScript and CSS, using React and Bootstrap."
              ghLink="https://github.com/villi02/personal-portfolio-website"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={stockimg}
              isBlog={false}
              title="Time Series AI Stock Predictor"
              description="A project where I served as project lead for Cogito NTNU, a student organization, revolving around using AI to predict the stock prices of the Oslo Stock Exchange. Inspired by renaissance technologies, we used out-of-marked data in combination with mathematics and advanced algorithms to predict if the stock would go up or down the following day. There were two main models for the project, one LSTM and a random forest classifier."
              ghLink="https://github.com/CogitoNTNU/Stockbot"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={memegenimg}
              isBlog={false}
              title="Ai For Social Good"
              description="Used an LSTM model to try to make funny one-liners. Used code/ai-model from a Stanford research project to make an application that inserted meme text onto an image to make a meme out of any picture."
              ghLink="https://github.com/CogitoNTNU/memeAI"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;