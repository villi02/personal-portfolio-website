import React from 'react';
import { Experience } from '../components/Experience';
import colorSharp from "../assets/img/color-sharp.png"
import { Col, Container, Row } from 'react-bootstrap';
import ClassCard  from "../components/academics/ClassCards.js";
import ProjectCard from "../components/projectPage/ProjectCards";

const Academics = () => {
    return (
        <Container fluid className='project-section'>
            <Container>
                <h1 className="project-heading">
                    My <strong className="purple">Courses</strong>
                </h1>
                <p style={{ color: "white" }}>
                    Here are the courses I've taken during University
                </p>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    <Col md={4} className="project-card">
                        <ClassCard
                            title="Electricity and Magnetism"
                            description="Electrostatics: Coulomb's law. Electric field and force. Gauss' law. Electric potential and energy. Conductors. Capacitance. Dielectrics. Magnetostatics: Magnetic field, force, moment and energy. Magnetic dipole. Biot-Savart's law. Ampere's law. Magnetic flux. Magnetic materials. Electromagnetic induction: Faraday's law. Lenz' law. Inductance. Simple electric circuits. Electromagnetic waves. Experimental methods: Measuring physical quantities. Data acquisition. Interpretation. Documentation"
                            code="FY1003"
                            weburl="https://www.ntnu.no/studier/emner/FY1003/2022#tab=omEmnet"
                        />
                            
                        
                    </Col>
                </Row>
            </Container>
        </Container>
            
        );
    };
export default Academics;