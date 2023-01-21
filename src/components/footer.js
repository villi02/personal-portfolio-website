import { Col, Container, Row } from "react-bootstrap";
import logo from '../assets/img/logo.svg';
import linkedInIcon from '../assets/img/linkedInIcon.svg';
import instagramIcon from '../assets/img/instagramIcon.svg';
import githubIcon from '../assets/img/githubIcon.svg';

/*
export const Footer = () => {
    return (
        <Footer className="footer">
            <Container>
                <Row className="align-item-center">
                <Col sm={6}>
                    <img src={logo} alt="logo"></img>
                </Col>
                <Col sm={6} className="text-center text-sm-end">
                    <div className="social icon">
                    <a href="https://www.linkedin.com/in/vilhjalmur-arnar-vilhjalmsson/" target="_blank"><img src={linkedInIcon} alt=""/></a>
                    <a href="https://www.instagram.com/vilhjalmurarnar/" target="_blank"><img src={instagramIcon} alt=""/></a>
                    <a href="https://github.com/villi02" target="_blank"><img src={githubIcon} alt=""/></a>
                    </div>
                    <p>CopyRight 2022. All Right Reserved Vilhjalmur Arnar Vilhjalmsson</p>
                </Col>
                </Row>
            </Container>
        </Footer>
    )
}
*/

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
                <a href="#"><img src={linkedInIcon} alt="Icon" /></a>
                <a href="#"><img src={instagramIcon} alt="Icon" /></a>
                <a href="#"><img src={githubIcon} alt="Icon" /></a>
              </div>
              <p>Copyright 2022. All Rights Reserved Vilhjalmur Arnar Vilhjalmsson</p>
            </Col>
          </Row>
        </Container>
      </footer>
    )
  }
