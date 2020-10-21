import React, {useEffect, useState} from "react"
import axios from "axios"
import PlantCard from "./PlantCard"
import Data from "./Data"

const PlantList = () =>{

  const [plants, setPlants] = useState([])

 useEffect(() => {
    axios
    .get("https://trefle.io/api/v1/plants/search?token=u5KKkMllqpKd5SKWk4ckRYmq6QkLIEzX4h8pENUZQkI&q=coconut")
    .then(res => {
      setPlants(res.data)
      console.log("This is my Data",res.data)
      console.log(plants)
      console.log(setPlants)
     
    })
    
    .catch((error)=> console.log("error", error))

  }, [])

 

return(
 
<div className="plantDiv">
 
{/* {plants.length && plants.map(plant =>(
  <PlantCard />
))} */}
  <PlantCard />

</div>



)

}
export default PlantList