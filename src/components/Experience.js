import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png"
import cogito from "../assets/img/Cogito_logo_hvit_a_3.png";

export const Experience = () => {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    
    return (
        <section className="skill" id="skills">
            <div>
                <Container>
                    <Row>
                        <Col>
                            <div className="skill-bx">
                                <h2>
                                    Experienced in
                                </h2>
                                <p> Lorem Ipsum experience section firstly <br></br>Lorem Ipsum experience section secondly</p>
                                <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                    <div className="item">
                                        <img src={meter1} style={{height:"159.5px"}} alt="Image" />
                                        <h5>Machine Learing</h5>
                                    </div>
                                    <div className="item">
                                        <img src={meter2} alt="Image" />
                                        <h5>Backend development</h5>
                                    </div>
                                    <div className="item">
                                        <img src={meter3} alt="Image" />
                                        <h5>Object Oriented Programming</h5>
                                    </div>
                                    <div className="item">
                                        <img src={meter1} alt="Image" />
                                        <h5>Algorithms and datastructures</h5>
                                    </div>
                                </Carousel>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <img className="background-image-left" src={colorSharp}/>
        </section>
    )
}