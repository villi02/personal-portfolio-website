import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import demostockpic from "../assets/img/StockAppImg/demopic.png";
import podcastPic from "../assets/img/podcastlogo.jpeg";
import vlogpic from "../assets/img/projects/vlogpic.png";
import nordkapppic from "../assets/img/projects/nordkapppic.jpeg";
import memegenimg from "../assets/img/projects/memegenimg.jpeg";
import stockimg from"../assets/img/projects/stockimg.jpeg";
import { ProjectCard } from "./ProjectCard";
import bridgecomp from "../assets/img/projects/Chinese_bridge_logo.jpg"
import nasaPic from "../assets/img/projects/NASAlogo.png"


export const HProjects = () => {

    const projects = [
        {
            title: "Stock IOS App",
            description: "IOS App oriented around dividend investing",
            imgUrl: demostockpic,
        },
        {
            title: "AI Meme Caption Generator",
            description: "A project conducted with Cogito NTNU for spring 2022",
            imgUrl: memegenimg,
        },
        {
            title: "Time Series AI Stock Predictor",
            description: "Using out-of-marked data to predict the Oslo Stock Exchange",
            imgUrl: stockimg,
        },
    ];

    const creativeProjects = [
        {
            title: "Podcast on Spotify",
            description: "A podcast where I interview people I find interesting",
            imgUrl: podcastPic,
        },
        {
            title: "Youtube Vlog for parents",
            description: "A vlog I made so that my parents can see what I'm up to in college",
            imgUrl: vlogpic,
        },
        {
            title: "Top Grear-like race",
            description: "A race from Bergen to Nordkapp, public transport vs private car",
            imgUrl: nordkapppic,
        },


    ];

    const AwardsandHonors = [
        {
            title: "2nd - Chinese Bridge Competition Norway",
            description: "Consisted of a speech and talent show. My talent show was a play with Philip Alsager.",
            imgUrl: bridgecomp,
        },
        {
            title: "3rd - Chinese Bridge Competition Norway",
            description: "Consisted of a speech only, due to COVID-19",
            imgUrl: bridgecomp,
        },
        {
            title: "3rd - Hackathon with NASA JPL",
            description: "Hackathon hosted by Start NTNU at NTNU. Found ways for the EELS-project at JPL to traverse Enceladus - a moon of Saturn. Used software provided by JPL. (ROS, C++, Python)",
            imgUrl: nasaPic,
        },


    ];

    
    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col size={12}>
                        <h2>Projects and Awards</h2>
                        <p>Here is a brief overview of my projects<br></br>For more details click on "Projects" on top of the page!</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Programming</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Random</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">Awards</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                           <Tab.Pane eventKey="first">
                            <Row>
                                {
                                projects.map((project, index) => {
                                    return (
                                    <ProjectCard
                                        key={index}
                                        {...project}
                                        />
                                    )
                                })
                                }
                        </Row>
                            </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                <Row>
                                {
                                creativeProjects.map((project, index) => {
                                    return (
                                    <ProjectCard
                                        key={index}
                                        {...project}
                                        />
                                    )
                                })
                                }
                        </Row>
                                </Tab.Pane>
                            <Tab.Pane eventKey="third">
                            <Row>
                                {
                                AwardsandHonors.map((project, index) => {
                                    return (
                                    <ProjectCard
                                        key={index}
                                        {...project}
                                        />
                                    )
                                })
                                }
                        </Row>
                            </Tab.Pane>
                        </Tab.Content>
                        </Tab.Container> 
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    )
}