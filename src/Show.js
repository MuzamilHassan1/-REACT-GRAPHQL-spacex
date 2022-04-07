import React from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
import { useLocation, Link } from "react-router-dom";
import Ships from "./Ships";

const Show = () => {
  const location = useLocation()
  const { id,name,details,date,ships } = location.state
  return(
    <>
      <Row xs={1} md={2} className="g-4 mb-4 justify-content-center">
          <Col>
            <Card className="text-center">
              <Card.Header>Mission Number {id}</Card.Header>
              <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{details}</Card.Text>
              </Card.Body>
              <Card.Footer className="text-muted">Launch Date: {date.substring(0,10)}</Card.Footer>
            </Card>
          </Col>
        </Row>

        <div>
          {ships.length > 0 ? ships.map(s => (<Ships key={s.name} data={s}/>)) : <h3 className="text-center">No Ships Data Found for This Mission</h3>}
        </div>

        <div className="center-button">
          <Link to="/missions">
              <Button variant="primary" className="mb-4">Return to Mission Listing</Button>
          </Link>
        </div>
    </>
  )
}

export default Show
