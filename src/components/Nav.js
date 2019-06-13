import React from 'react'
// import Search from "./Search/Search";
import NavGenres from "./Nav/NavGenres";

function Nav(props) {

    // function handleGenreUpdate(genreName) {
    //     return props.onGenreUpdate(genreName);
    // }



    return (
        <nav className="nav-container">
        {/* <Search 
        //  type={type}
         searchTxt={props.searchTxt}
         onSelectUpdate={(option) => props.onSelectUpdate(option)}
         onSearchUpdate={(searchTxt) => props.onSearchUpdate(searchTxt)}
         onSearchSubmit={(searchTxt, searchType) => props.onSearchSubmit(searchTxt, searchType)} /> */}
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
