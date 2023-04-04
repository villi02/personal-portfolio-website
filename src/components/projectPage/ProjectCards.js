
import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import ListGroup from 'react-bootstrap/ListGroup';

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify", position: "relative", paddingBottom: "20px" }}>
          {props.description}
        </Card.Text>
        {props.language && props.frameworks && (
          <ListGroup style={{paddingTop:"15px", paddingBottom:"10px"}}>
            <ListGroup.Item className="project-code-lang-view" >{props.language}</ListGroup.Item>
            <ListGroup.Item className="project-code-lang-view">{props.frameworks}</ListGroup.Item>
          </ListGroup>
        )}
        
        <Button variant="primary" href={props.ghLink} target="_blank" style={{position: "absolute" , bottom:"10px" }}>
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </Button>
        {"\n"}
        {"\n"}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ right: "10px", position: "absolute", bottom:"10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards; 