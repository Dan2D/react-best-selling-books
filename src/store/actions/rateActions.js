import API_CALLS from "../../components/Utils/APICalls";
import { GET_RATING } from "../actions/types";

const { GR_KEY } = API_CALLS["GR"];
const CORS = "https://cors-anywhere.herokuapp.com/";

export const getRating = (isbn, author, title) => {
  return function(dispatch) {
    fetch(
      `${CORS}https://www.goodreads.com/search/index.xml?key=${GR_KEY}&q=${isbn}`
    )
    .then(response => response.text())
    .then(str => (new window.DOMParser()).parseFromString(str, "text/xml"))
      .then(data => {
        if (data.querySelector("search total-results").textContent === "0"){
          return titleSearch(dispatch, title, author);
        }
        let id = data.querySelector("results work id").textContent;
        let avgRating = data.querySelector("results work average_rating").textContent;
        dispatch({
          type: GET_RATING,
          title: title,
          avgRating,
          id
        });
        return;
      });
  };
};

function titleSearch(dispatch, title, author){
  let authorEdit = author.replace(/\s/g, "+");
  let titleEdit = title.replace(/\s/g, "+");
  fetch(
    `${CORS}https://www.goodreads.com/book/title.xml?author=${authorEdit}&key=${GR_KEY}&title=${titleEdit}`
  )
  .then(response => response.text())
  .then(str => (new window.DOMParser()).parseFromString(str, "text/xml"))
    .then(data => {
      let id = data.querySelector("book id").textContent;
      let avgRating = data.querySelector("book average_rating").textContent;
      dispatch({
        type: GET_RATING,
        title: title,
        avgRating,
        id
      });
    });
  return
}