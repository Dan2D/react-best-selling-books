import React, { Component } from "react";
import Book from "../Books/Book";

import {isbnAssign, dateFormat, monthDateStatus} from '../../Utils/bookhelpers';
import { connect } from "react-redux";

class GenreBks extends Component {
  render() {
    if (this.props.loading){
      return <div/>
    }
    document.querySelectorAll("genre-menu__btns").forEach(item => (item.style.visibility = "hidden"));
    let dateMin = dateFormat(this.props.dateMin);
    let dateMax = dateFormat(this.props.dateMax);

    let bookArr = this.props.genre.books.map((book, indx) => {
      let isbn = isbnAssign(book);
      return (
        <Book
          key={book.title + "-" + indx}
          onBkClick={(cover, isbn) => this.props.onBkClick(cover, isbn)}
          onAuthClick={(author, srchTyp) => this.props.onAuthClick(author, srchTyp)}
          isLoading={true}
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
          <h3>{this.props.genre.display_name}</h3>
          <p>
            Active from: {dateMin} to {dateMax}
          </p>
          <p>{monthDateStatus(this.props.genre.display_name)}</p>
        </div>
        <div className="booklist-container">{bookArr}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  
  return {
    genre: state.page.genres,
    dateMin: state.date.dateMin,
    dateMax: state.date.dateMax,
    loading: state.page.isLoading
  };
};

export default connect(mapStateToProps)(GenreBks);
