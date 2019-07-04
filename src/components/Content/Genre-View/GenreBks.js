import React from "react";
import Book from "../Books/Book";
import { connect } from "react-redux";
import { getRating } from "../../../store/actions/rateActions";

function GenreBks(props) {
  console.log(props.genre, "GENRE BOOKS LOADED");
  document
    .querySelectorAll("genre-menu__btns")
    .forEach(item => (item.style.visibility = "hidden"));
  let dateMin = dateFormat(props.dateMin);
  let dateMax = dateFormat(props.dateMax);
  let monthly, isbn;


  let bookArr = props.genre.books.map((book, indx) => {
    isbn = isbnAssign(book);
    props.dispatch(getRating(isbn, book.author, book.title));
    return (
      <Book
        key={book.title + "-" + indx}
        onBkClick={(cover, isbn) => props.onBkClick(cover, isbn)}
        onAuthClick={(author, srchTyp) => props.onAuthClick(author, srchTyp)}
        type="genre"
        indx={indx}
        isbn={isbn}
        book={book}
      />
    );
  });

  function dateFormat(date) {
    if (date >= new Date() - 7) {
      return "Current";
    }
    let dateStr = date.toISOString().substr(0, 10);
    dateStr = dateStr.split("-");
    dateStr.push(dateStr.shift());
    dateStr = dateStr.join("/");
    return dateStr;
  }
  function isbnAssign(book){
    isbn = book.primary_isbn13;
    if (props.content === "genre") {
      let isbns = book.isbns.filter(
        (isbn, indx) => indx === book.isbns.length - 1
      );
      if (isbns[0] !== undefined && isbns !== null) {
        return isbn = isbns[0].isbn13;
      }
      return isbn;
    }
  }

  if (
    props.genre.display_name.includes("Audio") ||
    props.genre.display_name === "Business" ||
    props.genre.display_name === "Science" ||
    props.genre.display_name === "Sports and Fitness"
  ) {
    monthly = "(List is updated monthly)";
  }

  return (
    <div className="genre-container">
      <div className="genre-container__title-block">
        <h3>{props.genre.display_name}</h3>
        <p>
          Active from: {dateMin} to {dateMax}
        </p>
        <p>{monthly}</p>
      </div>
      <div className="booklist-container">{bookArr}</div>
    </div>
  );
}

export default connect(null)(GenreBks);
