export const sponsorService = {
  async getAnimals() {
    /*let response = await fetch("../../db/db.json", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    }); */
    // Replace ./data.json with your JSON feed
    /*let response = await fetch("../../db/db.json");
    // eslint-disable-next-line no-console
    console.log("Response: " + response);
    if (response.ok) {
      return await response.json();
    } else {
      throw Error(handleResponses(response.status));
    } */
  },
};

/*function handleResponses(code) {
  let message = "";
  switch (code) {
    case 401:
      message = "Não está autorizado a executar esta ação!";
      break;
    case 409:
      message = "Já existe um utilizador com este username!";
      break;
    default:
      message = "Mensagem desconhecida";
      break;
  }
  return message;
}*/

export default sponsorService;

//#endregion// https://devhints.io/js-fetch
