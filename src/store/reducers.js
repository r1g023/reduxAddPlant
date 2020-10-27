export const FETCH_PLANT_START = "FETCH_PLANT_START";
export const FETCH_PLANT_SUCCESS = "FETCH_PLANT_SUCCESS";
export const FETCH_PLANT_ERROR = "FETCH_PLANT_ERROR";

const initialState = {
  plants: [],
  isFetching: false,
  errors: "",
};

export const plantReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PLANT_START:
      return {
        ...state,
        plants: [],
        isFetching: true,
        errors: "",
      };
    case FETCH_PLANT_SUCCESS:
      return {
        ...state,
        plants: action.payload,
        isFetching: false,
        errors: "",
      };
    case FETCH_PLANT_ERROR:
      return {
        ...state,
        isFetching: false,
        errors: action.payload,
      };

    default:
      return state;
  }
};
