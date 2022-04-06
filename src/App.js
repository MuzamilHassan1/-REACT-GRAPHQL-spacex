import React,{useState,useEffect} from "react";
import CardList from "./CardList";
import Pagination from "./Pagination";

const QUERY = `
{
  launchesPast {
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
    // <div>
    //   {
    //     launches.map(l=>(
    //       <CardList
    //         key={l.id}
    //         title={l.mission_name}
    //         detail={l.details}
    //         id={l.id}
    //       />
    //     ))
    //   }

    // </div>
    <div>
      <Pagination
        data={launches}
        RenderComponent={CardList}
        dataLimit={5}
      />
    </div>
  );
}

export default App;
