import axios from "axios";

//Modification horaire.
export const postHoraire = async (newHoraire) => {
  try {
    const response = await axios.post(
      "http://localhost/API_ARCADIA/postHoraire.php",
      JSON.stringify(newHoraire)
    );
    alert(response.data.message);
  } catch (error) {
    alert(error.message);
    throw error;
  }
};
