import React from "react";
import { Card,Button, Row, Col } from "react-bootstrap";

const CardList = ({title, detail}) => {
  return(
    // <Card style={{ width: '35rem' }}>
    //   <Card.Img variant="top" src="https://i.imgur.com/MtEgYbY.jpg" />
    //   <Card.Body>
    //     <Card.Title>Card Title</Card.Title>
    //     <Card.Text>
    //       Some quick example text to build on the card title and make up the bulk of
    //       the card's content.
    //     </Card.Text>
    //     <Button variant="primary">Go somewhere</Button>
    //   </Card.Body>
    // </Card>

<Row xs={1} md={2} className="g-4 mb-4 justify-content-center">
  <Col>
    <Card className="text-center">
      <Card.Header>Featured</Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{detail}</Card.Text>
        <Button variant="primary">Show More</Button>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
  </Col>
</Row>
  )
}

export default CardList
