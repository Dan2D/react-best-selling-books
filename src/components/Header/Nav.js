import React from "react";
import {Link} from 'react-router-dom';
import {connect} from "react-redux";
import {getHomeContent} from "../../store/actions/pageActions";
import Search from "./Search/Search";
import Date from "./Date/Date";
import NavGenres from "./Genre-Menu/NavGenres";
import "./Nav.css";

function Nav(props) {
  const handleHomeClick = () => {
    if (props.content !== "home"){
      return props.dispatch(getHomeContent)
    }
  }
  return (
    <nav className="nav">
      <div className="nav-top">
        <div className="nav__title-corner">
          <Link to="/">
          <button className="nav__home-btn" onClick={handleHomeClick}>
            <img src={require("../../Images/home.png")} alt="home-btn"/>
          </button>
          </Link>
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

const mapStateToProps = state => {
  return {
    content: state.page.content
  }
}

export default connect(mapStateToProps)(MemoNav)
