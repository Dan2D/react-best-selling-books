import React from 'react'
import NavGenreBtns from "./NavGenreBtns";

function NavSubGenre(props) {
    function handleGenreClick(){

    }
    function genGenreLst (genreArr) 
        {let subGenreArr =  genreArr.map(genre => {
            let modifier = "";
            console.log(genre)
            if (genre.title === "Misc." || genre.title === "Children's Books")
                {modifier = " sub-genre--left"}
        return <div 
                key={genre.title}
                className={'genre-menu__sub-genre'+modifier}>
                    <button onClick={handleGenreClick}>
                        <h5>{genre.title}</h5>
                    </button>
                    <NavGenreBtns
                    key={genre.title+" sub-genre-title"}
                    onGenreClick={(genre, minDate, maxDate) => props.onGenreClick(genre, minDate, maxDate)}
                    subGenres={genre.array}/>
                </div>
            });
        return subGenreArr;
        }

    return (
        <div className='genre-menu'>
            {genGenreLst(props.genreLst)}
        </div>
    )
}

export default NavSubGenre