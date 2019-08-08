import React from "react";
import {Link} from 'react-router-dom';
import smoothscroll from "smoothscroll-polyfill";

function SrchBtns(props) {
  smoothscroll.polyfill();
  let placeholders = document.getElementsByClassName("srch-book-placeholder");
  let books = document.getElementsByClassName("book-hide");
  let pgArr = [];

  function handlePgBtnClick(pg) {
    for (let i = 0; i < placeholders.length; i++) {
      placeholders[i].style.display = "block";
      books[i].style.display = "none";
    }
    window.scrollTo(0, 0);
  }

  function genPgBtns(pgTotal) {
    let end = props.pg + 4;
    let i = props.pg - 4;
    if (i <= 0) {
      i = 1;
      end = 9;
    }
    if (pgTotal < 10) {
      end = pgTotal;
    }
    if (end > pgTotal) {
      end = pgTotal;
      i = pgTotal - 8;
    }
    for (i; i <= end; i++) {
      pgArr.push(
        <Link to={`/search/${props.searchType}=${props.searchTxt}/${i}`}
          key={i}
          className={i === props.pg ? "current-pg" : null}
          onClick={e => handlePgBtnClick(e.target.innerText)}
        >
          {i}
        </Link>
      );
    }
  }

  genPgBtns(props.pgTotal);

  return (
    <div className="srch-pagination">
      {props.pg > 4 ? (
        <Link to={`/search/${props.searchType}=${props.searchTxt}/1`}
         onClick={() => handlePgBtnClick(1)}>
          {"<"}
        </Link>
      ) : null}
      {pgArr}
      {props.pg + 4 < props.pgTotal ? (
        <Link to={`/search/${props.searchType}=${props.searchTxt}/${props.pgTotal}`}
         onClick={() => handlePgBtnClick(props.pgTotal)}>
         {">"}
        </Link>
      ) : null}
    </div>
  );
}

export default SrchBtns;
