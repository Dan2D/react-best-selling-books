import React from 'react'
import Search from "./Nav/Search";
import Date from "./Nav/Date";
import NavGenres from "./Nav/NavGenres";

function Nav(props) {

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
        content={props.content} 
        genreTxt={props.genreTxt}
        onHomeDateChange={(date) => props.onHomeClick(date)}
        onGenreDateChange={(genreTxt, date) => props.onGenreClick(genreTxt, date)}/>
        <NavGenres 
          onSubGenreClick={(subGenre) => props.onGenreClick(subGenre)}
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
