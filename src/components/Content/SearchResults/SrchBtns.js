import React from "react";
import {connect} from "react-redux";
import {getSearchTitle} from "../../../store/actions/pageActions"
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
    return props.dispatch(getSearchTitle(props.srchTxt, pg));
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
        <button
          key={i}
          className={i === props.pg ? "current-pg" : null}
          onClick={e => handlePgBtnClick(e.target.innerText)}
        >
          {i}
        </button>
      );
    }
  }

  genPgBtns(props.pgTotal);

  return (
    <div className="srch-pagination">
      {props.pg > 4 ? (
        <button onClick={() => handlePgBtnClick(1)}>{"<"}</button>
      ) : null}
      {pgArr}
      {props.pg + 4 < props.pgTotal ? (
        <button onClick={() => handlePgBtnClick(props.pgTotal)}>{">"}</button>
      ) : null}
    </div>
  );
}

export default connect(null)(SrchBtns);
