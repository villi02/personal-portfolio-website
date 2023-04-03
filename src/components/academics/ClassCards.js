import CardType  from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from "react-bootstrap/Button";
import { BsGithub } from "react-icons/bs";
import ntnuLogo from "../../assets/img/projects/ntnulogo.png"
import React from "react";

function classCards(props) {
  return (
    <CardType className="project-card-view" style={{ width: '18rem' }}>
      <CardType.Img variant="top" src={ntnuLogo} style={{backgroundColor:"white"}} />
      <CardType.Body>
        <CardType.Title>{props.title}</CardType.Title>
        <CardType.Text style={{ textAlign: "justify", position: "relative", paddingBottom: "20px" }}>
          {props.description}
        </CardType.Text>
      </CardType.Body>
      <ListGroup>
        <ListGroup.Item className='class-code-view'>{props.code}</ListGroup.Item>
      </ListGroup>
      <CardType.Body>
        <CardType.Link style={{bottom:"10px"}} href={props.weburl}>Course website</CardType.Link>
        {!props.hasCode && props.ghLink && (
           <Button variant="primary" href={props.ghLink} target="_blank" style={{position: "absolute" , bottom:"10px", right:"10px" }}>
           <BsGithub /> &nbsp;
           {"GitHub"}
         </Button>
        )}
      </CardType.Body>
    </CardType>
  );
}

export default classCards;