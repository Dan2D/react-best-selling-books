import React from "react";
import {connect} from "react-redux";
import SrchHdr from "./SrchHdr";
import SrchBk from "../Books/Search-Veiw/SrchBk";
import SrchBtns from "./SrchBtns";
import NotFound from "./NotFound";
import "./Search.css";

function SrchRslt(props) {
  if (parseInt(props.results) === 0) {
    return <NotFound />;
  }

  let pgTotal, bksPrPg;

  if (props.srchType === "title") {
    bksPrPg = 20;
  }

  pgTotal = props.results > 2000 ? 100 : Math.ceil(props.results / bksPrPg);

  let bookCode = props.bookArr.map((book, indx) => {
    return (
      <SrchBk
        key={book.title + indx}
        onAuthClick={(author, srchTyp) => props.onAuthClick(author, srchTyp)}
        srchType={props.srchType}
        author={book.author}
        indx={book.indx}
        id={book.id}
        title={book.title}
        cover={book.coverImg}
        pubDt={book.pubYr}
        
      />
    );
  });

  return (
    <div className="srch-container">
      {props.srchType === "author" ? (
        <SrchHdr
          author={props.author.name}
          authorDscrpt={props.author.dscrpt}
          homeTown={props.author.home}
          authLnk={props.author.link}
          authImg={props.author.avatar}
        />
      ) : (
        <h2>TITLE SEARCH RESULTS</h2>
      )}
      <div className="srch-bk-list">{bookCode}</div>
      {props.srchType === "author" ? null : (
        <SrchBtns
          onPgClick={(srchTxt, srchTyp, pg) =>
            props.onPgClick(srchTxt, srchTyp, pg)
          }
          srchTxt={props.srchTxt}
          srchType={props.srchType}
          pg={props.pg}
          pgTotal={pgTotal}
        />
      )}
    </div>
  );
}

const MemoSrchRslt = React.memo(SrchRslt, (prevProps, nextProps) => {
  if (
      prevProps.bookArr === nextProps.bookArr){
    return true
  }
  return false
})


const mapStateToProps = (state, ownProps) => {
  return {
    bookArr: state.page.books.bookArr,
    results: state.page.books.results,
    srchType: state.search.searchType,
    srchTxt: state.search.searchTxt,
    pg: parseInt(state.page.books.pg),
    author: state.page.books.author
  }
}

export default connect(mapStateToProps)(MemoSrchRslt);


