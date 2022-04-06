import React,{useState,useEffect} from "react";
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
const useLaunches = () => {
  const [launches,setLaunches] = useState([]);

  useEffect(()=>{
    fetch('https://api.spacex.land/graphql/',{
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: QUERY})
    }).then(resp => resp.json())
    .then(data => setLaunches(data.data.launchesPast))
  },[]);

  return launches;
}


const App = () => {
  const launches=useLaunches();

  return (
    <div>
      {launches.length > 0 ?
        <Pagination data={launches} dataLimit={5} />
        : <h1>Loading Data Please Wait.....</h1>
      }
    </div>
  );
}

export default App;
