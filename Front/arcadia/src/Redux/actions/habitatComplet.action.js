import axios from "axios";

export const GET_HABITATCOMPLET = "GET_HABITATCOMPLET";

export const getHabitatComplet = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get(
        process.env.REACT_APP_API + "/habitatComplet"
      );
      dispatch({ type: GET_HABITATCOMPLET, payload: res.data });
    } catch (error) {
      alert("Une erreur c'est produite" + error);
    }
  };
};
