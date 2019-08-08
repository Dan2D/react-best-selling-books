import React from "react";
import Book from "../Books/Book";
import {genreView} from "../../../store/actions/pageActions";
import {isbnAssign, dateFormat, monthDateStatus} from '../../Utils/bookhelpers';
import { connect } from "react-redux";

function GenreBks(props) {
  if (props.genre.genreTxt !== props.match.params.genre && props.isLoading){
    props.dispatch(genreView(props.match.params.genre, props.location.state.minDate, props.location.state.maxDate));
  }
    if (props.isLoading){
      return <div/>
    }
    document.querySelectorAll("genre-menu__btns").forEach(item => (item.style.visibility = "hidden"));
    let dateMin = dateFormat(props.dateMin);
    let dateMax = dateFormat(props.dateMax);

    let bookArr = props.books.map((book, indx) => {
      let isbn = isbnAssign(book);
      return (
        <Book
          key={book.title + "-" + indx}
          type="genre"
          indx={indx}
          isbn={isbn}
          book={book}
        />
      );
    });

    return (
      <div className="genre-container">
        <div className="genre-container__title-block">
          <h3>{props.genre.display_name}</h3>
          <p>
            Active from: {dateMin} to {dateMax}
          </p>
          <p>{monthDateStatus(props.genre.display_name)}</p>
          </div>
          <div className="booklist-container">
          {bookArr}
        </div>
      </div>
    );
  }

const mapStateToProps = (state) => {
  return {
    genre: state.page.genres,
    books: state.page.genres.books,
    dateMin: state.date.dateMin,
    dateMax: state.date.dateMax,
    isLoading: state.page.isLoading
  };
};

export default connect(mapStateToProps)(GenreBks);
