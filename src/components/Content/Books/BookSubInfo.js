import React, { Component } from "react";
import StarRating from "react-rating";
import API_CALLS from "../../Utils/APICalls";

const { GR_KEY } = API_CALLS["GR"];
const CORS = "https://cors-anywhere.herokuapp.com/";

class BookSubInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0,
      id: ""
    };
  }
  componentDidMount() {
    console.log(`https://www.goodreads.com/search/index.xml?key=${GR_KEY}&q=${this.props.isbn}`)
    fetch(
      `${CORS}https://www.goodreads.com/search/index.xml?key=${GR_KEY}&q=${this.props.isbn}`
    )
      .then(response => response.text())
      .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
      .then(data => {
        if (data.querySelector("search total-results").textContent === "0") {
          return 
        }
        let id = data.querySelector("results work id").textContent;
        let avgRating = data.querySelector("results work average_rating")
          .textContent;
        this.setState({rating: avgRating, id: id})
        return;
      });
      titleSearch(this.props.title, this.props.author);
    function titleSearch(title, author) {
      let authorEdit = author.replace(/\s/g, "+");
      let titleEdit = title.replace(/\s/g, "+");
      console.log(`https://www.goodreads.com/book/title.xml?author=${authorEdit}&key=${GR_KEY}&title=${titleEdit}`)
      fetch(
        `${CORS}https://www.goodreads.com/book/title.xml?author=${authorEdit}&key=${GR_KEY}&title=${titleEdit}`
      )
        .then(response => response.text())
        .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
        .then(data => {
          let id = data.querySelector("book id").textContent;
          let avgRating = data.querySelector("book average_rating").textContent;
          this.setState({rating: avgRating, id: id})
      return;
    });
  }
}
  render() {
    if (this.props.rating !== 0) {
      this.props.isBkRdy();
    }
    return (
      <div className="book-container__sub-info">
        <a
          className="book-buy-link"
          href={this.props.buyLnk.url}
          rel="noopener noreferrer"
          target="_blank"
        >
          Buy this Book
        </a>
        <div className="sub-info__rating">
          {this.state.rating === 0 ? (
            "No Rating Available"
          ) : (
            <div>
              <StarRating
                className="book-container__ratings"
                initialRating={this.state.rating}
                emptySymbol="far fa-star fa-lg"
                fullSymbol="fas fa-star fa-lg"
                fractions={2}
                readonly
              />
              {this.state.rating}
            </div>
          )}
        </div>
        <a
          href={`https://www.goodreads.com/book/show/${this.state.id}`}
          rel="noopener noreferrer"
          target="_blank"
        >
          Read Reviews
        </a>
      </div>
    );
  }
}
export default BookSubInfo;
