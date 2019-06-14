import React from 'react'
import Search from "./Nav/Search";
import NavGenres from "./Nav/NavGenres";

function Nav(props) {

    // function handleGenreUpdate(genreName) {
    //     return props.onGenreUpdate(genreName);
    // }



    return (
        <nav className="nav-container">
        <Search 
         searchTxt={props.searchTxt}
         onSelectUpdate={(option) => props.onSelectUpdate(option)}
         onSearchUpdate={(searchTxt) => props.onSearchUpdate(searchTxt)}
         onSearchSubmit={(searchTxt) => props.onSearchSubmit(searchTxt)} />
          <NavGenres 
          onSubGenreClick={(subGenre) => props.onSubGenreClick(subGenre)}
          genreLst={props.navGenres} />
          <button 
          className="home-btn-container"
          onClick={() => props.onHomeClick()}>
            <p>HOME</p>
            <div className=" fas fa-home fa-lg"/>
          </button>
        </nav>
    )
}

export default Nav
