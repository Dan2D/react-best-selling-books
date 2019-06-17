import React from 'react'
import Book from "./Book";

function MinGenre(props) {

    function handleGenreClick(){
        let genre = document.querySelector('button[data-name='+props.genre.list_name_encoded+']')
        let genreName = genre.dataset.name;
        let minDate = genre.dataset.minDate;
        let maxDate = genre.dataset.maxDate;
        return props.onGenreClick(genreName, minDate, maxDate );
    }

    let bookArr = props.books.map(book => {
        return <Book
                key={props.genre.display_name+"-"+book.title}
                onAuthClick={(author, srchTyp) => props.onAuthClick(author, srchTyp)}
                type='overview' 
                book={book}/>
    })
let btn = document.querySelector('button[data-name='+props.genre.list_name_encoded);
let btnCpy = btn.cloneNode(true);
    return (
        <div className="mini-genre-container">
            <button onClick={handleGenreClick}>{props.genre.display_name}</button>
            <div className="mini-genre-books-container">
                {bookArr}
            </div>
        </div>
    )
}

export default MinGenre
