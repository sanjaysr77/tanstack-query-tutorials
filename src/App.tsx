import axios from "axios";
import { useEffect, useState } from "react";

function App () {

  const [data, setData] = useState([]);

  useEffect(()=>{
    axios
      .get("http://localhost:8080/todos")
      .then((res)=> {
        setData(res.data)
        console.log(res.data[0].checked)
      })
      .catch((err) =>{
        console.log(err);
      })
  }, [])
  return (
    <div>
      {JSON.stringify(data)}
    </div>
  )
}

export default App;