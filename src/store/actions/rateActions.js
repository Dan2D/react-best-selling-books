import API_CALLS from "../../components/Utils/APICalls";
import { GET_RATING } from "../actions/types";

const { GR_KEY } = API_CALLS["GR"];
const CORS = "https://cors-anywhere.herokuapp.com/";

export const getRating = (isbn, author, title) => {
  return function(dispatch) {
    fetch(
      `${CORS}https://www.goodreads.com/book/review_counts.json?isbns=${isbn}&key=${GR_KEY}`
    )
      .then(response => {
        if (response.ok) {
          response.json();
        }
      })
      .then(data => {
        if (data == null){
            return
        }
        let id = data.books[0].id;
        let avgRating = data.books[0].average_rating;
        dispatch({
          type: GET_RATING,
          avgRating,
          id
        });
        return;
      });
    let authorEdit = author.replace(/\s/g, "+");
    let titleEdit = title.replace(/\s/g, "+");
    fetch(
      `${CORS}https://www.goodreads.com/book/title.xml?author=${authorEdit}&key=${GR_KEY}&title=${titleEdit}`
    )
      .then(response => {
        return response.text();
      })
      .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
      .then(data => {
        let id = data.querySelector("book id").textContent;
        let avgRating = data.querySelector("book average_rating").textContent;
        dispatch({
          type: GET_RATING,
          avgRating,
          id
        });
      });
    return;
  };
};

//     fetch(
//       `${CORS}https://www.goodreads.com/book/isbn/${isbn}?key=${GR_KEY}`
//     ).then(response => {
//       if (response.ok) {
//         return response.text();
//       } else {
//         let authorEdit = author.replace(/\s/g, "+");
//         let titleEdit = title.replace(/\s/g, "+");
//         fetch(
//           `${CORS}https://www.goodreads.com/book/title.xml?author=${authorEdit}&key=${GR_KEY}&title=${titleEdit}`
//         )
//           .then(response => {
//             if (response.ok) {
//               return response.text();
//             }
//          } )
//           .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
//           .then(data => {
//             let id = data.querySelector("book id").textContent;
//             let avgRating = data.querySelector("book average_rating")
//               .textContent;
//             dispatch({
//               type: GET_RATING,
//               avgRating,
//               id
//             });
//           });
//       }
//     });
//   };
// };

// if (this.props.type === "book") {
//     fetch(CORS + GR_API + GR_ISBN_QRY + isbn + "?key=" + GR_KEY)
//       .then(response => {
//         if (response.ok) {
//           return response.text();
//         } else {
//           let author = this.props.author.replace(/\s/g, "+");
//           let title = this.props.title.replace(/\s/g, "+");
//           return fetch(
//             CORS +
//               GR_API +
//               "book/title.xml?author=" +
//               author +
//               "&key=" +
//               GR_KEY +
//               "&title=" +
//               title
//           ).then(response => response.text());
//         }
//       })
//       .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
//       .then(data => {
//         let id = data.querySelector("book id").textContent;
//         let avgRating = data.querySelector("average_rating").textContent;
//         this.setState({ rating: avgRating, id: id });
//       });
//   } else {
//     fetch(CORS + GR_API + GR_RVW_QRY + isbn + "&key=" + GR_KEY)
//       .then(response => response.json())
//       .then(data => {
//         let id = data.books[0].id;
//         let avgRating = data.books[0].average_rating;
//         this.setState({ rating: avgRating, id: id });
//
