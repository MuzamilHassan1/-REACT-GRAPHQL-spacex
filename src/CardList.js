import React from "react";
import { Card,Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardList = ({launch}) => {
  // const onClickHandler = () => {
  //   <Link to="/" className="text-white custom">Home Page</Link>
  // }
  return(
    <Row xs={1} md={2} className="g-4 mb-4 justify-content-center">
      <Col>
        <Card className="text-center">
          <Card.Header>Mission Number {launch.id}</Card.Header>
          <Card.Body>
            <Card.Title>{launch.mission_name}</Card.Title>
            <Card.Text>{launch.details}</Card.Text>

            <Link
              to={`/mission/${launch.id}`}
              state={{
                 id: launch.id,
                 name: launch.mission_name,
                 details:launch.details,
                 date:launch.launch_date_local,
                 ships: launch.ships
              }}>
                <Button variant="primary" >Show More</Button>
            </Link>

          </Card.Body>
          <Card.Footer className="text-muted">Launch Date: {launch.launch_date_local.substring(0,10)}</Card.Footer>
        </Card>
      </Col>
    </Row>
  )
}

export default CardList
