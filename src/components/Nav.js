import React from "react";
import Search from "./Nav/Search";
import Date from "./Nav/Date";
import NavGenres from "./Nav/NavGenres";

function Nav(props) {
  console.log("NAV LOADED");
  return (
    <nav className="nav">
      <div className="nav__title-corner">
        <button className="nav__home-btn" onClick={() => props.onHomeClick()}>
          <div className="fas fa-home fa-lg" />
        </button>
        <h1 className="nav__site-title">BSB</h1>
      </div>
      <Search
        onSelectUpdate={srchTyp => props.onSelectUpdate(srchTyp)}
        onSearchUpdate={searchTxt => props.onSearchUpdate(searchTxt)}
        onSearchSubmit={(srchTxt, srchTyp) =>
          props.onSearchSubmit(srchTxt, srchTyp)
        }
        searchTyp={props.searchTyp}
        searchTxt={props.searchTxt}
      />

      <NavGenres
        onGenreClick={(genre, minDate, maxDate) =>
          props.onGenreClick(genre, minDate, maxDate)
        }
        genreLst={props.navGenres}
      />
      <Date
        onDateChange={date => props.onDateChange(date)}
        date={props.date}
        dateMin={props.dateMin}
        dateMax={props.dateMax}
        content={props.content}
        genreTxt={props.genreTxt}
      />
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

export default MemoNav;
