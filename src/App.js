import React,{useState,useEffect} from "react";
const QUERY = `
{
  launchesPast {
		id
    mission_name
    launch_date_local
    ships {
      name
    }
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
          <li>{l.id +": "+ l.mission_name}</li>
        ))
      }

    </div>
  );
}

export default App;
