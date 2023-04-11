import { Col, Container, Row } from "react-bootstrap";
import linkedInIcon from '../assets/img/linkedInIcon.svg';
import instagramIcon from '../assets/img/instagramIcon.svg';
import githubIcon from '../assets/img/githubIcon.svg';


export const Footer = () => {
    return (
      <footer className="footer">
        <Container>
          <Row className="align-items-center">
            <Col size={12} sm={6}>
            <h1 style={{color: 'white'}}>VAV</h1>
            </Col>
            <Col size={12} sm={6} className="text-center text-sm-end">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/vilhjalmur-arnar-vilhjalmsson/"><img src={linkedInIcon} alt="Icon" /></a>
                <a href="https://www.instagram.com/vilhjalmurarnar/"><img src={instagramIcon} alt="Icon" /></a>
                <a href="https://github.com/villi02"><img src={githubIcon} alt="Icon" /></a>
              </div>
              <p>Copyright 2023. All Rights Reserved Vilhjalmur Arnar Vilhjalmsson</p>
            </Col>
          </Row>
        </Container>
      </footer>
    )
  }
