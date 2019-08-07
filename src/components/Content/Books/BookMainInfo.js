import React from "react";
import AuthorArray from "./AuthorArray";
import {Link} from "react-router-dom";
import { connect } from "react-redux";
import {getBkDtl} from "../../../store/actions/pageActions";
import noCover from "../../../Images/Book-Placeholder.png";

function BookMainInfo(props) {
  let bookCover = props.bkImg !== null ? props.bkImg : noCover;
  let descriptionBlock = <div className="book-container__description">
                          <h4>Description</h4>
                          <p>{props.dscrpt ? props.dscrpt : "No Description Available..."}</p>
                        </div>;
  function handleBkClick() {
    return props.dispatch(getBkDtl(bookCover, props.isbn));
  }

  return ( 
    <div className="book-container__gen-info" data-ref={props.type}>
      <div className="book-container__rank">
        <strong>#{props.rank}</strong>
      </div>
      <div className="book-container__cover" data-ref={props.type}>
        <Link to={`/book/${props.title.replace(" ", "+")}`}>
          <img onClick={handleBkClick} src={bookCover} alt={props.title} />
        </Link>
        {props.type === "genre" ? descriptionBlock : <></>}
      </div>
      <div className="book-container__title-author">
        <button className="book-title" onClick={handleBkClick}>
          {props.title}
        </button>
        <div className="book-container__author-info">
          <p>by</p>
          <div className="book-container__author-btns" data-ref={props.type}>
            <AuthorArray authors={props.author}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default connect(null)(BookMainInfo);
