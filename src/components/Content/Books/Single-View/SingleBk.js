import React, { useEffect } from "react";
import Loading from "../../../Loading";
import {connect} from "react-redux";
import {getSearchAuth} from "../../../../store/actions/pageActions";
import StarRating from "react-rating";

function SingleBk(props) {
  useEffect(() => {
    if (document.getElementById("bk-description")){
    document.getElementById("bk-description").innerHTML = props.book.dscrpt;
  }
  });
  if (props.isLoading){
    return <Loading/>
  }
  let authors = [];
  props.book.author.forEach((name, indx) => {
    let comma = "";
    if (indx < props.book.author.length - 1) {
      comma = ",";
    }
    authors.push(
      <button key={name+indx} onClick={e => props.dispatch(getSearchAuth(e.target.textContent))}>
        {name + comma}
      </button>
    );
  });

  return (
    <div className="sngl-bk-container">
      <div className="sngl-bk-main">
        <div className="sngl-bk-main__cover-title">
          <img src={props.cover} alt={props.book.title} />
          <h3>{props.book.title}</h3>
          <p>By {authors}</p>
        </div>
        <div className="sngl-bk-main__dscrpt">
          <h5>Description</h5>
          <p id="bk-description"></p>
        </div>
      </div>
      <div className="sngl-bk-sub">
        {props.book.rating === 0 ? (
          "No Rating Available"
        ) : (
          <div>
            <StarRating
              className="book-container__ratings"
              initialRating={props.book.rating}
              emptySymbol="far fa-star fa-lg"
              fullSymbol="fas fa-star fa-lg"
              fractions={2}
              readonly
            />
            {props.book.rating}
          </div>
        )}
        <p>{`Total Pg: ${props.book.pgNum}`}</p>
        <p>{`ISBN13: ${props.book.isbn13}`}</p>
        <p>{`Published: ${props.book.pubMt}/${props.book.pubDy}/${props.book.pubYr}`}</p>
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    isLoading: state.page.isLoading,
    book: state.page.books.bookArr,
    cover: state.page.books.cover
  }
}

export default connect(mapStateToProps)(SingleBk);
