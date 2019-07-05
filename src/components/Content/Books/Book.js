import React from "react";
import BookMainInfo from "./BookMainInfo";
import MinBookSubInfo from "./Overview/MinBookSubInfo";
import BookSubInfo from "./BookSubInfo";
import ContentLoader from "react-content-loader";
import "./Books.css"


function Book(props) {

  let placeholders = document.getElementsByClassName("book-placeholder");
  let books = document.getElementsByClassName("book-hide");
  function handleBkLd(){
    for (let i = 0; i < placeholders.length; i++) {
      placeholders[i].style.display = "none";
      books[i].style.display = "flex";
    }
  }

  let placeholder = (
    <ContentLoader
      className="book-placeholder"
      style={{ display: props.type === "overview" ? "none" : "block" }}
      height={550}
      width={300}
      speed={2}
      primaryColor="#f3f3f3"
      secondaryColor="#ecebeb"
    >
      <rect x="0" y="0" rx="4" ry="4" width="40" height="39" />
      <rect x="0" y="515" rx="4" ry="4" width="250" height="13" />
      <rect x="0" y="50" rx="4" ry="4" width="300" height="450" />
      <rect x="0" y="535" rx="4" ry="4" width="150" height="13" />
      <rect x="0" y="555" rx="4" ry="4" width="100" height="13" />
    </ContentLoader>
  );

  return (
    <div className="book-container" data-ref={props.type}>
      {placeholder}
      <div
        className="book-hide"
        style={{ display: props.type === "overview" ? "flex" : "none" }}
      >
        <BookMainInfo
          key={props.book.title + "main-info"}
          type={props.type}
          isbn={props.isbn}
          title={props.book.title}
          author={props.book.author}
          bkImg={props.book.book_image}
          dscrpt={props.book.description}
          rank={props.book.rank}
        />
        {props.type === "overview" ? (
          <MinBookSubInfo
            key={props.book.title + "min-sub-info"}
            wksOnLst={props.book.weeks_on_list}
          />
        ) : (
          <BookSubInfo
            key={props.book.title + "sub-info"}
            isBkRdy={handleBkLd}
            buyLnk={props.book.buy_links[1]}
            title={props.book.title}
            author={props.book.author}
            isbn={props.isbn}
          />
        )}
      </div>
    </div>
  );
}



export default Book;
