import React from "react";
import Book from "../Books/Book";
import {connect} from "react-redux";
import {Link} from 'react-router-dom';
import {genreView} from "../../../store/actions/pageActions";

function MinGenre(props) {
  let isbn;
  function handleGenreClick() {
    let genre = document.querySelector(
      "button[data-name=" + props.genre.list_name_encoded + "]"
    );
    let genreName = genre.dataset.name;
    let minDate = genre.dataset.minDate;
    let maxDate = genre.dataset.maxDate;
    return props.dispatch(genreView(genreName, minDate, maxDate));
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
    }
    return isbn
  }

  let bookArr = props.books.map(book => {
    isbn = isbnAssign(book);
    return (
      <Book
        key={props.genre.display_name + "-" + book.title}
        type="overview"
        isbn={isbn}
        book={book}
      />
    );
  });

  return (
    <div className="overview-genre">
      <Link to={`/genre/${props.genre.list_name_encoded}`}
       className="overview-genre__title" 
       onClick={handleGenreClick}>
          {props.genre.display_name}
      </Link>
      <div className="overview-books">{bookArr}</div>
    </div>
  );
}

export default connect(null)(MinGenre);
