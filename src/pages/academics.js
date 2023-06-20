import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Button from "react-bootstrap/Button";
import { BsGithub } from "react-icons/bs";
/*
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
                    Desperately trying to figure this page out
                </p>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    <Col md={3} className="project-card">
                        <ClassCard
                            title="Electricity and Magnetism"
                            description="Electrostatics: Coulomb's law. Electric field and force. Gauss' law. Electric potential and energy. Conductors. Capacitance. Dielectrics. Magnetostatics: Magnetic field, force, moment and energy. Magnetic dipole. Biot-Savart's law. Ampere's law. Magnetic flux. Magnetic materials. Electromagnetic induction: Faraday's law. Lenz' law. Inductance. Simple electric circuits. Electromagnetic waves. Experimental methods: Measuring physical quantities. Data acquisition. Interpretation. Documentation"
                            code="FY1003"
                            program="mathphysics"
                            weburl="https://www.ntnu.no/studier/emner/FY1003/2022#tab=omEmnet"
                        />
                    </Col>
                    <Col md={3} className="project-card">
                        <ClassCard
                            title="Wave Physics and Fluid Mechanics"
                            description="Introduction to wavephysics and fluidmechanicsWavephysics: Description of wave motion, harmonic waves, the wave equation, elastic waves, wave packets, wave phenomena, dispersion.Continuummechanics/fluidmechanics: The continuum hypothesis, conservation laws, pressure, the control volume method, differential methods in flow systems, Navier-Stokes' equation. Various flow system."
                            code="TFY4163"
                            program="mathphysics"
                            weburl="https://www.ntnu.edu/studies/courses/TFY4163#tab=omEmnet"
                            ghLink="https://github.com/villi02/TFY4163-Bolgefysikk-og-fluidmekanikk"
                        />
                    </Col>
                    <Col md={3} className="project-card">
                        <ClassCard
                            title="Physics"
                            description="Main topics: Dynamics. Electromagnetism. Detailed content: Dynamics: Kinematics. Newton's laws. Work and energy. Momentum. Torque. Moment of inertia. Angular momentum. Conservation laws. Oscillations. Resonance. Electromagnetism: Electrostatics. Magnetism. Electromagnetic induction. DC and AC circuits."
                            code="TFY4125"
                            program="physmatcs"
                            weburl="https://www.ntnu.edu/studies/courses/TFY4125#tab=omEmnet"
                            ghLink="https://github.com/paul673/Fysikklab"
                        />
                    </Col>
                    <Col md={3} className="project-card">
                        <ClassCard
                            title="Mathematics 3 - Linear algebra"
                            description="Complex numbers and the complex exponential function. Second order linear differential equations. Systems of linear equations, Gauss-Jordan elimination, reduced echelon form, matrix algebra, determinants. Vector spaces, subspaces, linear dependence and independence. Inner products, orthogonality, orthogonal projections, Gram-Schmidt orthogonalization, and the method of least squares. Eigenvalues and eigenvectors, diagonalization, symmetric matrices and quadratic forms. First order systems of differential equations."
                            code="TMA4115"
                            program="physmatcs"
                            weburl="https://www.ntnu.no/studier/emner/FY1003/2022#tab=omEmnet"
                        />
                    </Col>
                    <Col md={3} className="project-card">
                        <ClassCard
                            title="Mathematics 2 - Multivariable calculus and vector analysis"
                            description="Curves in space. Functions of several variables. Taylor's theorem in two dimensions, extremal values in several variables, Lagrange multipliers. Double and triple integrals, line and surface integrals. Vector calculus. The theorems of Green, Stokes, and Gauss."
                            code="TMA4105"
                            program="physmatcs"
                            weburl="https://www.ntnu.edu/studies/courses/TMA4105#tab=omEmnet"
                        />
                    </Col>
                    <Col md={3} className="project-card">
                        <ClassCard
                            title="Mathematical methods 1"
                            description=" Systems of linear equations, Gauss-Jordan-elimination, matrix algebra, determinants. Limits and continuity, differensiation and integration of functions in one variable, maxima and minima, implicit differensiation and trigonometric functions, related rates, differentials and linearization, L'Hopitals rule, Newton's method and the bisection method. See website for full description"
                            code="IMAT1001"
                            program="physmatcs"
                            weburl="https://www.ntnu.edu/studies/courses/IMAT1001#tab=omEmnet"
                        />
                    </Col>
                    <Col md={3} className="project-card">
                        <ClassCard
                            title="Databases"
                            description="Data modeling (EER). Translation from EER to relational database. The relational model. Databases: ANSI / SPARC architecture, normalization, SQL, concurrency issues. Relationship database alternatives: NoSQL and semi-structural data (XML and JSON). Transaction management against database."
                            code="IDATT2103"
                            program="cs"
                            weburl="https://www.ntnu.edu/studies/courses/IDATT2103#tab=omEmnet"
                        />
                    </Col>
                    <Col md={3} className="project-card">
                        <ClassCard
                            title="Algorithms and data structures"
                            description=" Techniques and algorithms: Recursion, sorting, search, hashing, shortest path, maximum flow, greedy algorithms, dynamic programming. Data structures: array, lists, queues, stack, tree, graph. Theory on complexity and big O notation"
                            code="IDATT2101"
                            program="physmatcs"
                            weburl="https://www.ntnu.edu/studies/courses/TFY4125#tab=omEmnet"
                            ghLink="https://github.com/villi02/IDATT2101_Algorithms_and_Datastructures_Fall2022"
                        />
                    </Col>
                    <Col md={3} className="project-card">
                        <ClassCard
                            title="Software Engineering"
                            description=" Introduction to system development, object-oriented analysis and design, Unified Modeling Language (UML), agile development methodology, vision and requirements analysis, software architecture and design, documentation, testing, risk analysis, user participation, human-machine interaction, prototyping, user testing and project."
                            code="IDATT1002"
                            program="cs"
                            weburl="https://www.ntnu.edu/studies/courses/IDATT1002#tab=omEmnet"
                            ghLink="https://github.com/villi02/IDATT1002_Systemutvikling_Final_Project_S2022"
                        />
                    </Col>
                    <Col md={3} className="project-card">
                        <ClassCard
                            title="Statistics"
                            description="Descriptive statistics. Probability of events, combinatorics and conditional probability. Stochastic variables, expectation and variance. Covariance, correlation and independence. Common probability distributions (e.g., binomial, poisson, exponential and normal distribution). The central limit theorem. Parameter estimation and confidence intervals. One-sample hypothesis tests. Simple linear regression.  Multiple linear regression, classification, cluster analysis."
                            code="ISTT1003"
                            program="physmatcs"
                            weburl="https://www.ntnu.edu/studies/courses/ISTT1003#tab=omEmnet"
                        />
                    </Col>
                    <Col md={3} className="project-card">
                        <ClassCard
                            title="Programming 2"
                            description="Collaboration between objects. Lists, search and sorting. Compare objects. Inheritance and polymorphism. GUI. Data files and serialization. Exception handling. Functional programming. Design patterns. Integrated development environment. Debugging. Unit testing. Version control. Databases and object-relational mapping (ORM)."
                            code="IDATT2001"
                            program="physmatcs"
                            weburl="https://www.ntnu.edu/studies/courses/IDATT2001#tab=omEmnet"
                            ghLink="https://github.com/villi02/Wargames"
                        />
                    </Col>
                    <Col md={3} className="project-card">
                        <ClassCard
                            title="Programming 1"
                            description="Basic principles of object-oriented design and object-oriented programming (OOP) - definitions and concepts in OOP (classes, objects, encapsulation). Modelling - Datatypes, logical conditions, loops, logical and arithmetic operations, read and write operations. Arrays, lists and collections. Interaction between objects. Introduction to Integrated Development Environment (IDE) and Debugging."
                            code="IDATT1001"
                            program="physmatcs"
                            weburl="https://www.ntnu.edu/studies/courses/IDATT1001#tab=omEmnet"
                            ghLink="https://github.com/villi02/IDATT1001_Programmering-1_H2021"
                        />
                    </Col>
                    <Col md={3} className="project-card">
                        <ClassCard
                            title=" Space Technology II"
                            description="The course is a concentrated practice/experimentally oriented course.The course contains i.a. one week of laboratory exercises and experiments at Andøya Space. It is based on the course TTT4234 Space Technology I. The exercises at Andøya, the launch of a student rocket with sensors, comprise the integration of the rocket payload, soldering and calibration of the sensors, telemetry set-up, the launch itself, download and analysis of the in-flight measured data. In addition to the laboratory exercises and the report from Andøya, the course contains a half day seminar, an essay and an exercise report that shall be written by the student."
                            code="TTT4235"
                            weburl="https://www.ntnu.edu/studies/courses/TTT4235#tab=omEmnet"
                        />
                    </Col>
                    <Col md={3} className="project-card">
                        <ClassCard
                            title="Space Technology I"
                            description="An introduction to Space Technology and Space oriented activities will be presented. Mechanics in Space. Weightlessness and microgravity research. The atmosphere. Rocket technology. Satellites. Observational satellites, environmental observations. Communication and communication systems. Man in Space. The course will run once a week in the autumn term, starting in August."
                            code="TTT4234"
                            weburl="https://www.ntnu.edu/studies/courses/TTT4234#tab=omEmnet"
                        />
                    </Col>
                    <Col md={3} className="project-card">
                        <ClassCard
                            title="Mathematical methods 3 for computer engineers"
                            description="Vector spaces and linear transformations Subspaces of Rn, base and dimension. General vector spaces, function spaces and norms. Matrix transformations, null spaces and column spaces. Application: Fourier series and solution of partial differential equations.
                            Differential equations with solution methods.
                            Numerical methods General numerics: Representations of floating point numbers in the computer, calculations with floating point numbers and various sources of error. Error magnification and condition. Convergence rate
                            Direct methods:
                            Solution of linear equation systems, PA = LU factorization, least squares method
                            Interpolation with cubic splines, Bezier curves.
                            Iterative methods:
                            Newton's multivariate method
                            Solution of linear equation systems (Jakobi, conjugate gradients)
                            Calculation of eigenvalues and eigenvectors (power method)
                            Solution of some types of differential equations, Runge-Kutta.
                            "
                            code="IMAT2150"
                            weburl="https://www.ntnu.edu/studies/courses/TTT4234#tab=omEmnet"
                        />
                    </Col>
                    <Col md={3} className="project-card">
                        <ClassCard
                            title="Mathematical methods 2 for Computer engineers"
                            description="Complex numbers. Eigenvalues and eigenvectors. Power series, geometric series, Taylor series. series for exponential and trigonometric functions. Function of two and more variables, partial differentiation, extreme value problems. Logics: Statements, arguments, basic proof theory. Mathematical induction. Set theory and discrete functions. Number theory: Divisibility and congruence, RSA as application. Graph theory: Important types of graphs, graph isomorphy, trees. Graph theoretical algorithms, such as Prim's and Dijkstra's algorithms. Combinatorics: Counting results related to quantities, functions, and graphs."
                            code="IMAT2021"
                            weburl="https://www.ntnu.edu/studies/courses/TTT4234#tab=omEmnet"
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
            
        );
    };
    */

    const posts = [
        { id: 1, title: 'Post 1', content: 'Content for Post 1' },
        { id: 2, title: 'Post 2', content: 'Content for Post 2' },
        { id: 3, title: 'Post 3', content: 'Content for Post 3' },
    ];

    const csCourses = [
        { title: 'Algorithms and Data Structures - C++', code: 'IDATT2101', program: 'physmatcs', weburl: 'https://www.ntnu.edu/studies/courses/IDATT2101#tab=omEmnet', ghLink: 'https://github.com/villi02/IDATT2101_Algorithms_and_Datastructures_Fall2022'},
        { title: 'Databases - MySQL', code: 'IDATT2103', program: 'cs', weburl: 'https://www.ntnu.edu/studies/courses/IDATT2103#tab=omEmnet'},
        { title: 'Software Engineering - Java', code: 'IDATT1002', program: 'cs', weburl: 'https://www.ntnu.edu/studies/courses/IDATT1002#tab=omEmnet', ghLink: 'https://github.com/villi02/IDATT1002_Systemutvikling_Final_Project_S2022'},
        { title: 'Programming 2 - Java', code: 'IDATT2001', program: 'cs', weburl: 'https://www.ntnu.edu/studies/courses/IDATT2001#tab=omEmnet', ghLink: 'https://github.com/villi02/Wargames'},
        { title: 'Programming 1 - Java', code: 'IDATT1001', program: 'cs', weburl: 'https://www.ntnu.edu/studies/courses/IDATT1001#tab=omEmnet', ghLink: 'https://github.com/villi02/IDATT1001_Programmering-1_H2021'}
    ];
    
    const mathCourses = [
        { title: 'Mathematics 3 - Linear algebra', code: 'TMA4115', program: 'physmatcs', weburl: 'https://www.ntnu.edu/studies/courses/TMA4115#tab=omEmnet'},
        { title: 'Mathematics 2 - Multivariable calculus and vector analysis', code: 'TMA4105', program: 'physmatcs', weburl: 'https://www.ntnu.edu/studies/courses/TMA4105#tab=omEmnet'},
        { title: 'Mathematics 1 - Single variable calculus', code: 'IMAT1001', program: 'physmatcs', weburl: 'https://www.ntnu.edu/studies/courses/TMA4100#tab=omEmnet'},
        { title: 'Statistics', code: 'ISTT1003', program: 'physmatcs', weburl: 'https://www.ntnu.edu/studies/courses/ISTT1003#tab=omEmnet'},
    ];

    const physicsCourses = [
        { title: 'Physics', code: 'TFY4125', program: 'physmatcs', weburl: 'https://www.ntnu.edu/studies/courses/TFY4125#tab=omEmnet', ghLink: 'https://github.com/paul673/Fysikklab'},
        { title: 'Wave Physics and Fluid Mechanics', code: 'TFY4163', program: 'mathphysics', weburl: 'https://www.ntnu.edu/studies/courses/TFY4163#tab=omEmnet', ghLink: 'https://github.com/villi02/TFY4163-Bolgefysikk-og-fluidmekanikk'},
        { title: 'Electricity and Magnetism', code: 'FY1003', program: 'mathphysics', weburl: 'https://www.ntnu.no/studier/emner/FY1003/2022#tab=omEmnet', ghLink: 'https://github.com/villi02/FY1003_Electricity_and_Magnetism'},
        { title: 'Space Technology I', code: 'TTT4234', program: 'physmatcs', weburl: 'https://www.ntnu.edu/studies/courses/TTT4234#tab=omEmnet', ghLink: ''},
        { title: 'Space Technology II', code: 'TTT4235', program: 'physmatcs', weburl: 'https://www.ntnu.edu/studies/courses/TTT4235#tab=omEmnet', ghLink: ''},
    ];

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
                    <Accordion className='academics-accordion' defaultExpanded={true}>
                        <AccordionSummary
                            expandIcon={<ArrowDropDownIcon sx={{ color: "white" }} />}>
                            <Typography>Mathematics Courses</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        {mathCourses.map((mathCourses) => (
                                <Typography className="right-align-link">
                                    {mathCourses.title}
                                    <a className='no-underline' href={mathCourses.weburl}>Course page</a>
                                </Typography>
                        ))}
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className='academics-accordion' defaultExpanded={true}>
                        <AccordionSummary
                            expandIcon={<ArrowDropDownIcon sx={{ color: "white" }} />}>
                            <Typography>Physics Courses</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        {physicsCourses.map((course) => (
                                <Typography className="right-align-link">
                                    {course.title}
                                    <a className='no-underline' href={course.weburl}>Course page</a>
                                </Typography>
                        ))}
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className='academics-accordion' defaultExpanded={true}>
                        <AccordionSummary
                            expandIcon={<ArrowDropDownIcon sx={{ color: "white" }} />}>
                            <Typography>Computer Science Courses</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        {csCourses.map((course) => (
                        <Typography key={course.id} className="right-align-link">
                            <span>{course.title}</span>
                            {!course.hasCode && course.ghLink && (
                                <a className='no-underline-gh' href={course.ghLink}>GitHub</a>
                            )}
                            <a className='no-underline' href={course.weburl}>Course page</a>
                            </Typography>
                        ))}
                        </AccordionDetails>
                    </Accordion>
                </Row>
            </Container>
        </Container>
    );

};

export default Academics;