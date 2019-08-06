import React from "react";
import {connect} from "react-redux";
import {getHomeContent} from "../../store/actions/pageActions";
import Search from "./Search/Search";
import Date from "./Date/Date";
import NavGenres from "./Genre-Menu/NavGenres";
import "./Nav.css";

function Nav(props) {
  console.log("NAV LOADED");
  return (
    <nav className="nav">
      <div className="nav-top">
        <div className="nav__title-corner">
          <button className="nav__home-btn" onClick={() => props.dispatch(getHomeContent)}>
            <div className="fas fa-home fa-lg" />
          </button>
          <h1 className="nav__site-title">BSB</h1>
        </div>
        <div className="nav-menu">
          <Search/>
          <Date />
        </div>
      </div>
      <div className="nav-bottom">
        <NavGenres
          onGenreClick={(genre, minDate, maxDate) =>
            props.onGenreClick(genre, minDate, maxDate)
          }
          genreLst={props.navGenres}
        />
      </div>
    </nav>
  );
}

const MemoNav = React.memo(Nav, (prevProps, nextProps) => {
  return (
    prevProps.genreTxt === nextProps.genreTxt &&
    prevProps.date === nextProps.date &&
    prevProps.navGenres === nextProps.navGenres &&
    prevProps.searchTxt === nextProps.searchTxt &&
    prevProps.searchTyp === nextProps.searchTyp &&
    prevProps.content === nextProps.content
  );
});

export default connect(null)(MemoNav)
