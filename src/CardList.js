import React from "react";
import { Card,Button, Row, Col } from "react-bootstrap";

const CardList = ({title, detail, id}) => {
  return(
    <Row xs={1} md={2} className="g-4 mb-4 justify-content-center">
      <Col>
        <Card className="text-center">
          <Card.Header>Featured {id}</Card.Header>
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
