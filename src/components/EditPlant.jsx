import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useHistory, useParams } from "react-router-dom";

const EditPlant = (props) => {
  const [editPlant, setEditPlant] = useState([]);
  const [addPlant, setAddPlant] = useState({
    id: Date.now(),
    plant_name: "",
    plant_species: "",
    water_schedule: "",
  });

  const { push } = useHistory();
  const { itemID } = useParams();

  useEffect(() => {
    axiosWithAuth()
      .get(`api/plants/${itemID}`)
      .then((res) => {
        console.log(res, "EDIT PLANTS GET REQUEST WORKED");
        setAddPlant(res.data);
      })
      .catch((err) => console.error(`unable to getById # ${itemID}: `, err));
  }, [itemID]);

  const handleChange = (e) => {
    console.log(e.target.name, ":", e.target.value);
    setAddPlant({
      ...addPlant,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .put(`api/plants/${itemID}`, addPlant)
      .then((res) => {
        console.log(res, "add plant submit succsesful");
        setEditPlant(res.data);
        push(`/plant-list/${itemID}`);
      })
      .catch((err) => {
        console.log(err, "error adding plant");
      });
  };

  return (
    <div className="signup-container">
      <form onSubmit={handleSubmit}>
        Name:
        <div className="form-inputs">
          <input
            type="text"
            name="plant_name"
            placeholder="Enter Plant Name"
            value={addPlant.plant_name}
            onChange={handleChange}
          />
        </div>
        Species:
        <div className="form-inputs">
          <input
            type="text"
            name="plant_species"
            placeholder="Enter Species"
            value={addPlant.plant_species}
            onChange={handleChange}
          />
        </div>
        Schedule:
        <div className="form-inputs">
          <input
            type="text"
            name="water_schedule"
            placeholder="Enter water Schedule"
            value={addPlant.water_schedule}
            onChange={handleChange}
          />
        </div>
        <button className="form-input-btn" type="submit">
          Edit Plant
        </button>
      </form>
    </div>
  );
};

export default EditPlant;
