import React from 'react'
import Book from "./Book";

function MinGenre(props) {

    let bookArr = props.books.map(book => {
        return <Book
                key={props.genre.display_name+"-"+book.title}
                onAuthClick={(author, srchTyp) => props.onAuthClick(author, srchTyp)}
                type='overview' 
                book={book}/>
                // title={book.title}
                // bkImg={book.book_image}
                // rank={book.rank}
                // author={book.author}
                // buyLnk={book.buy_links[2]}
                // wksOnLst={book.weeks_on_list}
                // dscrpt={book.description}/>
    })

    return (
        <div className="mini-genre-container">
            <button onClick={() => props.onGenreClick(props.genre.list_name_encoded)}>{props.genre.display_name}</button>
            <div className="mini-genre-books-container">
                {bookArr}
            </div>
        </div>
    )
}

export default MinGenre
