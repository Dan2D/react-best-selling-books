import React from 'react'
import NavGenreBtns from "./NavGenreBtns";

function NavSubGenre(props) {

    function genGenreLst (genreArr) 
        {let subGenreArr =  genreArr.map(genre => {
        return <div key={genre.title}
                className='genre-sub-container'>
                    <h5>{genre.title}</h5>
                    <NavGenreBtns
                    key={genre.title+" sub-genre-title"}
                    onGenreClick={(genre, minDate, maxDate) => props.onGenreClick(genre, minDate, maxDate)}
                    subGenres={genre.array}/>
                </div>
            });
        return subGenreArr;
        }

    return (
        <div className='genre-category-container'>
            {genGenreLst(props.genreLst)}
        </div>
    )
}

export default NavSubGenre