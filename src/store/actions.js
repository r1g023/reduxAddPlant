import {
  FETCH_PLANT_START,
  FETCH_PLANT_SUCCESS,
  FETCH_PLANT_ERROR,
} from "../store/reducers";
import { axiosWithAuth } from "../utils/axiosWithAuth";

/// get PLANT LIST
export const getPlants = () => (dispatch) => {
  dispatch({ type: FETCH_PLANT_START });

  axiosWithAuth()
    .get("api/plants")
    .then((res) => {
      console.log(res, "fetching plants from PLANTLIST");
      dispatch({ type: FETCH_PLANT_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log(err, "erro fetching plants from PLANTLIST");
      dispatch({ type: FETCH_PLANT_ERROR, payload: err.error });
    });
};

///ADD PLANT
export const addPlant = (addPlant) => (dispatch) => {
  dispatch({ type: FETCH_PLANT_START });

  axiosWithAuth()
    .get("api/plants", addPlant)
    .then((res) => {
      console.log(res, "add plants successful");
      dispatch({ type: FETCH_PLANT_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log(err, "error adding plants");
      dispatch({ type: FETCH_PLANT_ERROR, payload: err.error });
    });
};
