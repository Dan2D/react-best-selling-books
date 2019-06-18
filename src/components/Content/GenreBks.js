import React from 'react'
import Book from "./Books/Book";


function GenreBks(props){ 
    console.log("GENRE BOOKS LOADED")
    let bookArr = props.genre.books.map((book, indx) => {
        return <Book 
                key={book.title+'-'+indx}
                type='genre' 
                onAuthClick={(author, srchTyp) => props.onAuthClick(author, srchTyp)}
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
            <div className="genre-booklist-container">
                <h2>{props.genre.display_name}</h2>
                <p>{dateMin} to  {dateMax}</p>
                <div className="booklist-container">
                    {bookArr}
                </div>
            </div>
    )
}

export default GenreBks
