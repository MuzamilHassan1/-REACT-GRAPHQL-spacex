import React,{useState,useEffect} from "react";
import CardList from "./CardList";

const QUERY = `
{
  launchesPast(limit: 5) {
    id
    mission_name
    launch_date_local
    ships {
      name
      image
    }
    details
  }
}
`

function App() {

  const [launches,setLaunches] = useState([]);

  useEffect(()=>{
    fetch('https://api.spacex.land/graphql/',{
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: QUERY})
    }).then(resp => resp.json())
    .then(data => setLaunches(data.data.launchesPast))
  },[]);

  return (
    <div>
      {
        launches.map(l=>(
          //<li>{l.id +": "+ l.mission_name}</li>
          <CardList
            key={l.id}
            title={l.mission_name}
            detail={l.details}
          />
        ))
      }

    </div>
  );
}

export default App;
