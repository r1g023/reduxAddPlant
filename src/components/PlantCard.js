import React from "react"


const PlantCard = (props) =>{


return(
<div className="plant-list"  style={{textAlign:"center"}}>
  <h2>Common Name</h2>
    <img src={props.imgURL}/>
    <li>family</li>
    <li>family_common_Name</li>

</div>

)



}
export default PlantCard