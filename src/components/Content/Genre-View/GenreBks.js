import React, { Component } from "react";
import Book from "../Books/Book";
import { connect } from "react-redux";

class GenreBks extends Component {
  componentDidMount(){
    let genreBks = this.props.books
  }
  render() {
    console.log(this.props.books, "GENRE BOOKS LOADED");
    if (this.props.loading){
      return <div>LOADING...</div>
    }
    document
      .querySelectorAll("genre-menu__btns")
      .forEach(item => (item.style.visibility = "hidden"));
    let dateMin = dateFormat(this.props.dateMin);
    let dateMax = dateFormat(this.props.dateMax);
    let monthly, isbn;

    let bookArr = this.props.books.map((book, indx) => {
      isbn = isbnAssign(book);
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
    function isbnAssign(book) {
      return (isbn = book.primary_isbn13);
    }

    if (
      this.props.genre.display_name.includes("Audio") ||
      this.props.genre.display_name === "Business" ||
      this.props.genre.display_name === "Science" ||
      this.props.genre.display_name === "Sports and Fitness"
    ) {
      monthly = "(List is updated monthly)";
    }

    return (
      <div className="genre-container">
        <div className="genre-container__title-block">
          <h3>{this.props.genre.display_name}</h3>
          <p>
            Active from: {dateMin} to {dateMax}
          </p>
          <p>{monthly}</p>
        </div>
        <div className="booklist-container">{bookArr}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  
  return {
    genre: state.page.genres,
    books: state.page.genres.books,
    content: state.page.content,
    date: state.date.dateCurr,
    dateMin: state.date.dateMin,
    dateMax: state.date.dateMax,
    loading: state.page.isLoading
  };
};

export default connect(mapStateToProps)(GenreBks);
