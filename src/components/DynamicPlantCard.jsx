import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const DynamicPlantCard = (props) => {
  const [plants, setPlants] = useState([]);

  const { itemID } = useParams();
  const { push } = useHistory();

  useEffect(() => {
    axiosWithAuth()
      .get(`api/plants/${itemID}`)
      .then((res) => {
        console.log(res, "getting plant from DYNAMIC ROUTING AXIOS");
        setPlants(res.data);
      })
      .catch((err) => {
        console.log(err, "error fetching plan from DYNAMIC ROUTING AXIOS");
      });
  }, [itemID]);
  // const item = plants.find((item) => item.id === Number(itemID));
  // // console.log(item, "item");
  //CAN DO IT THIS WAY AS WELL
  // if (!plants.length) {
  //   return <h2>Loading....</h2>;
  // }

  const handleDelete = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .delete(`api/plants/${itemID}`)
      .then((res) => {
        console.log(res, "handleDelete successful");
        setPlants(res.data);
        push(`/plant-list`);
      })
      .catch((err) => {
        console.log(err, "error in deleting item");
      });
  };

  return (
    <div className="plantItem">
      <h4>Name: {plants.plant_name}</h4>
      <h4>Name: {plants.plant_species}</h4>
      <h4>Name: {plants.water_schedule}</h4>
      <div className="buttonContainer">
        <button
          className="buttons"
          onClick={() => {
            push(`/edit-plant/${itemID}`);
          }}
        >
          Edit
        </button>
        <button className="buttons" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default DynamicPlantCard;
