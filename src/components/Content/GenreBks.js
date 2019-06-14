import React from 'react'
import Book from "./Books/Book";


function GenreBks(props){ 

    let bookArr = props.genre.books.map((book) => {
        return <Book 
                key={book.title}
                type='genre' 
                onClick={null}
                handleRatingClick={null} 
                book={book}/>
        });

   
    return (
            <div className="genre-booklist-container">
                <h2>{props.genre.display_name}</h2>
                <div className="booklist-container">
                    {bookArr}
                </div>
            </div>
    )
}

export default GenreBks
