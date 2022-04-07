import React from 'react'
import { Card, Row, Col } from "react-bootstrap";

const Ships = ({data}) => {
  return (
    <Row xs={1} md={2} className="g-4 mb-4 justify-content-center">
      <Col>
        <Card>
          <Card.Img variant="top" src={data.image} />
          <Card.Body>
            <Card.Text>{data.name}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  )
}

export default Ships;
