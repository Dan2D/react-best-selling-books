import React from "react";
import Loading from "../../../Loading";
import AuthorArray from "../Book-Components/AuthorArray";
import Rating from "../Book-Components/Rating";
import {getBkDtl} from "../../../../store/actions/pageActions";
import {connect} from "react-redux";

function SingleBk (props) {
  console.log(props.location.state)
    if (props.content !== "detail"){
      props.dispatch(getBkDtl(props.location.state.bkCover, props.match.params.id));
      return <Loading isLoading={props.isLoading}/>
    }
    if (document.getElementById("bk-description")){
      document.getElementById("bk-description").innerHTML = props.book.dscrpt;
    }
    return (
      <div className="sngl-bk-container">
        <div className="sngl-bk-main">
          <div className="sngl-bk-main__cover-title">
            <img src={props.location.state.bkCover} alt={props.book.title} />
            <h3>{props.book.title}</h3>
            <p>By </p>
            <AuthorArray authors={props.book.author}/>
          </div>
          <div className="sngl-bk-main__dscrpt">
            <h5>Description</h5>
            <p id="bk-description"></p>
          </div>
        </div>
        <div className="sngl-bk-sub">
          <Rating rating={props.book.rating}/>
          <p>{`Total Pg: ${props.book.pgNum}`}</p>
          <p>{`ISBN13: ${props.book.isbn13}`}</p>
          <p>{`Published: ${props.book.pubMt}/${props.book.pubDy}/${props.book.pubYr}`}</p>
          <a
          href={`https://www.goodreads.com/book/show/${props.id}`}
          rel="noopener noreferrer"
          target="_blank"
        > Read Reviews
        </a>
        <a
          className="book-buy-link"
          href={props.location.state.buyLnk.url}
          rel="noopener noreferrer"
          target="_blank"
        >
          Buy this Book
        </a>
        </div>
      </div>
    );
  }

const mapStateToProps = (state, ownProps) => {
  return {
    isLoading: state.page.isLoading,
    book: state.page.books.bookArr,
    content: state.page.content,
    id: state.page.books.id
  }
}

export default connect(mapStateToProps)(SingleBk);
