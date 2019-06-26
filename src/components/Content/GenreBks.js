import React from 'react'
import Book from "./Books/Book";


function GenreBks(props){ 
    console.log("GENRE BOOKS LOADED")
    let bookArr = props.genre.books.map((book, indx) => {
        return <Book 
                key={book.title+'-'+indx}
                onTtlClick={(book) => props.onTtlClick(book)}
                onAuthClick={(author, srchTyp) => props.onAuthClick(author, srchTyp)}
                type='genre' 
                book={book}/>
        });
    
function dateFormat(date){
    if (date >= new Date())
        {return 'Current'}
    let dateStr = date.toISOString().substr(0,10);
    dateStr = dateStr.split("-");            
    dateStr.push(dateStr.shift());
    dateStr = dateStr.join("/");
    return dateStr;
}

let dateMin = dateFormat(props.dateMin);
let dateMax = dateFormat(props.dateMax);

        

    return (
            <div className="genre-container">
                <div className="genre-container__title-block">
                    <h3>{props.genre.display_name}</h3>
                    <p>{dateMin} to  {dateMax}</p>
                </div>
                <div className="booklist-container">
                    {bookArr}
                </div>
            </div>
    )
}

export default GenreBks
