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
                <p style={{ color: "white" }}>
                <strong className="physics">Math&Physics</strong>
                </p>
                <p style={{ color: "white" }}>
                <strong className="CS">Computer Science</strong>
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
                    <Col md={4} className="project-card">
                        <ClassCard
                            title="Wave Physics and Fluid Mechanics"
                            description="Introduction to wavephysics and fluidmechanicsWavephysics: Description of wave motion, harmonic waves, the wave equation, elastic waves, wave packets, wave phenomena, dispersion.Continuummechanics/fluidmechanics: The continuum hypothesis, conservation laws, pressure, the control volume method, differential methods in flow systems, Navier-Stokes' equation. Various flow system."
                            code="TFY4163"
                            weburl="https://www.ntnu.edu/studies/courses/TFY4163#tab=omEmnet"
                            ghLink="https://github.com/villi02/TFY4163-Bolgefysikk-og-fluidmekanikk"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ClassCard
                            title="Mathematics 2 - Multivariable calculus and vector analysis"
                            description="Curves in space. Functions of several variables. Taylor's theorem in two dimensions, extremal values in several variables, Lagrange multipliers. Double and triple integrals, line and surface integrals. Vector calculus. The theorems of Green, Stokes, and Gauss."
                            code="TMA4105"
                            weburl="https://www.ntnu.edu/studies/courses/TMA4105#tab=omEmnet"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ClassCard
                            title="Mathematics 3 - Linear algebra"
                            description="Complex numbers and the complex exponential function. Second order linear differential equations. Systems of linear equations, Gauss-Jordan elimination, reduced echelon form, matrix algebra, determinants. Vector spaces, subspaces, linear dependence and independence. Inner products, orthogonality, orthogonal projections, Gram-Schmidt orthogonalization, and the method of least squares. Eigenvalues and eigenvectors, diagonalization, symmetric matrices and quadratic forms. First order systems of differential equations."
                            code="TMA4115"
                            weburl="https://www.ntnu.no/studier/emner/FY1003/2022#tab=omEmnet"
                            ghLink="everythingforagreencard.com"
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
            
        );
    };
export default Academics;