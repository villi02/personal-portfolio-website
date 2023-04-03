import CardType  from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import React from "react";

function classCards(props) {
  return (
    <CardType className="project-card-view" style={{ width: '18rem' }}>
      <CardType.Img variant="top" src={props.imgPath} />
      <CardType.Body>
        <CardType.Title>{props.title}</CardType.Title>
        <CardType.Text style={{ textAlign: "justify", position: "relative", paddingBottom: "20px" }}>
          {props.description}
        </CardType.Text>
      </CardType.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{props.code}</ListGroup.Item>
      </ListGroup>
      <CardType.Body>
        <CardType.Link href={props.weburl}>Course website</CardType.Link>
        {!props.hasCode && props.ghLink && (
          <CardType.Link href={props.ghLink}>Course website</CardType.Link>
        )}
      </CardType.Body>
    </CardType>
  );
}

export default classCards;