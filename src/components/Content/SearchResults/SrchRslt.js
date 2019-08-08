import React from "react";
import Loading from '../../Loading';
import {getSearchTitle, getSearchAuth} from "../../../store/actions/pageActions";
import {connect} from "react-redux";
import SrchHdr from "./SrchHdr";
import SrchBk from "../Books/Search-Veiw/SrchBk";
import SrchBtns from "./SrchBtns";
import NotFound from "./NotFound";
import "./Search.css";

function SrchRslt(props) {
    if (props.page.text !== props.match.params.text ||props.pg != props.match.params.pg ||props.page.type !== props.match.params.type){
      if (props.match.params.type === "title"){
        props.dispatch(getSearchTitle(props.match.params.text, props.match.params.pg));
      }
      else{props.dispatch(getSearchAuth(props.match.params.text));}
    }

    if (props.page.isLoading){
      return <Loading isLoading={props.page.isLoading}/>
    }

    if (props.results === 0) {
      return <NotFound />;
    }

    let bksPrPg = props.match.params.type === "title" ? 20 : null;
    let pgTotal = props.results > 2000 ? 100 : Math.ceil(props.results / bksPrPg);

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
        {props.page.type === "author" ? (
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
        {props.match.params.type === "author" ? null : (
          <SrchBtns
            onPgClick={(srchTxt, srchTyp, pg) =>
              props.onPgClick(srchTxt, srchTyp, pg)
            }
            searchTxt={props.match.params.text}
            searchType={props.match.params.type}
            pg={parseInt(props.match.params.pg)}
            pgTotal={pgTotal}
          />
        )}
      </div>
    );
  }

const MemoSrchRslt = React.memo(SrchRslt, (prevProps, nextProps) => {
  if (
      prevProps.bookArr === nextProps.bookArr 
      && prevProps.page.isLoading === nextProps.page.isLoading 
      && prevProps.match.params === nextProps.match.params){
    return true
  }
  return false
})


const mapStateToProps = (state) => {
  return {
    page: state.page,
    bookArr: state.page.books.bookArr,
    pg: state.page.books.pg,
    results: state.page.books.results,
    author: state.page.books.author,
  }
}

export default connect(mapStateToProps)(MemoSrchRslt);


