import React, { Component } from "react";
import {connect} from "react-redux";
import StarRating from "react-rating";

class BookSubInfo extends Component {

  render() {
    let rating = this.props.rating[this.props.indx];
    let id = this.props.id[this.props.indx];
    if (rating !== 0) {
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
          {rating === 0 ? (
            "No Rating Available"
          ) : (
            <div>
              <StarRating
                className="book-container__ratings"
                initialRating={rating}
                emptySymbol="far fa-star fa-lg"
                fullSymbol="fas fa-star fa-lg"
                fractions={2}
                readonly
              />
              {rating}
            </div>
          )}
        </div>
        <a
          href={`https://www.goodreads.com/book/show/${id}`}
          rel="noopener noreferrer"
          target="_blank"
        >
          Read Reviews
        </a>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    rating: state.rate.rating,
    id: state.rate.id
  }
}

export default connect(mapStateToProps)(BookSubInfo)
