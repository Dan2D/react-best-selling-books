import React from "react";
import Book from "../Books/Book";
import Loading from "../../Loading";
import {genreView} from "../../../store/actions/pageActions";
import {isbnAssign, dateFormat, monthDateStatus} from '../../Utils/bookhelpers';
import { connect } from "react-redux";

 function GenreBks(props) {
    if (props.genre.list_name_encoded !== props.match.params.genre || props.genreTxt !== props.match.params.genre || props.content !== "genre"){
      props.dispatch(genreView(props.match.params.genre));
  }
    if (props.content !== "genre" && props.genreTxt !== props.match.params.genre){
      return <Loading isLoading={props.isLoading}/>
    }
    document.querySelectorAll("genre-menu__btns").forEach(item => (item.style.visibility = "hidden"));
    let genre = document.querySelector(
      "button[data-name=" + props.genre.list_name_encoded + "]"
    );
    let minDate = dateFormat(genre.dataset.minDate);
    let maxDate = dateFormat(genre.dataset.maxDate);

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
            Active from: {minDate} to {maxDate}
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
    menu: state.menu,
    genre: state.page.genres,
    content: state.page.content,
    genreTxt: state.page.genreTxt,
    books: state.page.genres.books,
    dateMin: state.date.dateMin,
    dateMax: state.date.dateMax,
    isLoading: state.page.isLoading
  };
};

export default connect(mapStateToProps)(GenreBks);
