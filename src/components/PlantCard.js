import React from "react"
import Card from 'react-bootstrap/Card'



const PlantCard = (props) =>{


return(
<div className="plant-list"  style={{textAlign:"center"}}>
  <Card >
    <Card.Img variant="top" src={props.imgURL}/>
  <Card.Body>
    <Card.Title>Card Title </Card.Title>
    <li>family</li>
    <li>family_common_Name</li>
  </Card.Body>
  </Card>
</div>

)



}
export default PlantCard