import { Navbar, Container, Nav, Button, Form, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";
import React,{useState} from "react";

const Navigation = ({launches}) => {
  const [launch,setLaunch] = useState({});
  const [text,setText] = useState('');
  const [suggestions,setsuggestions] = useState([]);


  const onSubmitHandler =  () => {
    setText('');;
    setsuggestions([]);
  };

  const onChangeHandler = (input) => {
    let matches = [];
    if(input.length > 0){
        matches = launches.filter(l =>{
          const regex = new RegExp(`${input}`,"gi");
          return l.mission_name.match(regex);
        })
    }
    setsuggestions(matches);
    setText(input);
  }

  const onSuggestHandler = (selection) => {
    setText(selection);
    setLaunch(launches.find(l => l.mission_name === selection))
    setsuggestions([]);
    //con();
  }

  // const con = () => {
  //   console.log(launch.details)
  //   console.log(launch.id)
  //   console.log(launch.ships)
  //   console.log(launch.mission_name)
  //   console.log(launch.launch_date_local)
  // }


  return (
    <Navbar expand="lg" className="mb-4 navbar-dark sticky-nav bg-dark">
      <Container fluid>
        <Navbar.Brand href="#" className="text-white">SPACEX APP</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll"/>
        <Navbar.Collapse id="navbarScroll">

          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          <Link to="/" className="text-white custom">Home Page</Link>
          <Link to="/missions" className="text-white custom">Missions Listing</Link>

          </Nav>

          <Form onSubmit={onSubmitHandler} className="d-flex">
            <FormControl
              type="search"
              placeholder="Search Mission by Name"
              onChange={e=>onChangeHandler(e.target.value)}
              value={text}
              className="me-2"
              aria-label="Search"
            />
            <Link
              to={`/mission/${launch.id}`}
              state={{
                 id: launch.id,
                 name: launch.mission_name,
                 details:launch.details,
                 date:launch.launch_date_local,
                 ships: launch.ships
              }}>
                <Button variant="success">Search</Button>
            </Link>
          </Form>


        <div className="list-group">
          {suggestions && suggestions.map((suggestion,i)=>
            <div
              className="suggestion list-group-item bg-dark"
              key={i}
              onClick={()=>onSuggestHandler(suggestion.mission_name)}
            >
              <div className="info">
                <div>{suggestion.mission_name}</div>
              </div>
            </div>
          )}
        </div>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation;
