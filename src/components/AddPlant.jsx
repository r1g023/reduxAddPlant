import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useHistory } from "react-router-dom";
// import { connect } from "react-redux";
// import { addPlant } from "../store/actions";

const AddPlant = (props) => {
  const [postPlant, setPostPlant] = useState();
  const [addPlant, setAddPlant] = useState({
    id: Date.now(),
    plant_name: "",
    plant_species: "",
    water_schedule: "",
  });

  const { push } = useHistory();

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
      .post(`api/plants`, addPlant)
      .then((res) => {
        console.log(res, "add plant submit succsesful ");
        setPostPlant(res.data);
        push("/plant-list");
      })
      .catch((err) => {
        console.log(err, "error adding plant");
      });
  };
  //implemented redux, easy peasy
  // props.addPlant(addPlant); // THIS IS FOR REDUX

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
          Add Plant
        </button>
      </form>
    </div>
  );
};

// use with REDUX
// const mapStateToProps = (state) => {
//   console.log(state, "state inside addPlant state to props");
//   return {
//     plants: state.plants,
//     isFetching: state.isFetching,
//     errors: state.errors,
//   };
// };
// export default connect(mapStateToProps, { addPlant })(AddPlant);

export default AddPlant;
