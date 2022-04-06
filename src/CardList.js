import React from "react";
import { Card,Button, Row, Col } from "react-bootstrap";
// import { Link } from "react-router-dom";

const CardList = ({title, detail, id, date}) => {
  // const onClickHandler = () => {
  //   <Link to="/" className="text-white custom">Home Page</Link>
  // }
  return(
    <Row xs={1} md={2} className="g-4 mb-4 justify-content-center">
      <Col>
        <Card className="text-center">
          <Card.Header>Mission Number {id}</Card.Header>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{detail}</Card.Text>
            {/* <Link to="/" className="custom">Show Page</Link> */}
            <Button variant="primary" >Show More</Button>
          </Card.Body>
          <Card.Footer className="text-muted">Launch Date: {date.substring(0,10)}</Card.Footer>
        </Card>
      </Col>
    </Row>
  )
}

export default CardList
