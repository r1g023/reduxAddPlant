import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import Loader from "react-loader-spinner";
import { Link } from "react-router-dom";

const PlantList = (props) => {
  const [plants, setPlants] = useState([]);
  const [loading, isLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      isLoading(false);
      axiosWithAuth()
        .get("api/plants")
        .then((res) => {
          console.log(res, "fetching plants from PLANTLIST");
          setPlants(res.data);
        })
        .catch((err) => {
          console.log(err, "erro fetching plants from PLANTLIST");
        });
    }, 1000);
  }, []);

  return (
    <>
      {loading ? (
        <Loader
          className="loader-spinner"
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000}
        />
      ) : (
        <div className="plantList">
          {plants.map((item) => (
            <div className="plantItem" key={item.id}>
              <Link className="dynamicCard" to={`/plant-list/${item.id}`}>
                <h4>Name: {item.plant_name}</h4>
                <h4>Species: {item.plant_species}</h4>
                <h4>Schedule: {item.water_schedule}</h4>
                <div className="buttonContainer">
                  <button className="buttons" onClick={() => {}}>
                    Edit
                  </button>
                  {/* <button className="buttons" onClick={() => {}}>
                    Delete
                  </button> */}
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default PlantList;