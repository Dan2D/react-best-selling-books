import React from 'react'
import Search from "./Nav/Search";
import Date from "./Nav/Date";
import NavGenres from "./Nav/NavGenres";

function Nav(props) {
  console.log("NAV LOADED")
    // function handleGenreUpdate(genreName) {
    //     return props.onGenreUpdate(genreName);
    // }



    return (
      <nav className="nav-container">
        <Search
          onSelectUpdate={(srchTyp) => props.onSelectUpdate(srchTyp)}
          onSearchUpdate={(searchTxt) => props.onSearchUpdate(searchTxt)}
          onSearchSubmit={(srchTxt, srchTyp) => props.onSearchSubmit(srchTxt, srchTyp)}
          srchTyp={props.srchTyp} 
          searchTxt={props.searchTxt} />
        <Date
        onDateChange={(date) => props.onDateChange(date)}
        date={props.date}
        dateMin={props.dateMin}
        dateMax={props.dateMax}
        content={props.content} 
        genreTxt={props.genreTxt} />
        <NavGenres 
          onGenreClick={(genre, minDate, maxDate) => props.onGenreClick(genre, minDate, maxDate)}
          genreLst={props.navGenres} />
        <button 
          className="home-btn-container"
          onClick={() => props.onHomeClick()}>
            <p>HOME</p>
            <div className="fas fa-home fa-lg"/>
        </button>
      </nav>
    )
}

export default Nav
