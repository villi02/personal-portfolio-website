import { useState, useEffect } from "react"
import { Container, Row, Col } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
// import headerImg from "../assets/img/header-img.svg"
import headerImg from "../assets/img/projects/intellectualLogo.png"


export const Banner = () => {
    const toRotate = ["Machine Learning Engineer", "Backend Software Engineer", "Business Developer", "Full Stack Developer"];
    const [isDeleting, setIsDeleting] = useState(0);
    const [loopNum, setLoopNum] = useState(0);
    const [text, setText] = useState('');
    const period = 2000;
    const [delta, setDelta] = useState(300 - Math.random() * 100);

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        },delta )

        return () => { clearInterval(ticker)};
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length -1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta /2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline"> Welcome to the portfolio of Vilhjalmur Arnar Vilhjalmsson</span>
                        <h1>{`I'm Vilhjalmur `}</h1>
                        <h1><span className="wrap">{text}</span></h1>
                        <p>Currently pursuing M.Sc in Math&Physics and M.Sc in Computer Science at the Norwegian University of Science and Technology (NTNU)</p>
                        <button onClick={() => console.log('connect')}>Let's connect!<ArrowRightCircle  size={25}/></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Image"/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
