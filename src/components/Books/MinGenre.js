import React from 'react'
import Book from "./Book";

function MinGenre(props) {

    let bookArr = props.books.map(book => {
        return <Book
                key={props.genre.display_name+"-"+book.title} 
                book={book}
                title={book.title}
                bkImg={book.book_image}
                rank={book.rank}
                author={book.author}
                buyLnk={book.buy_links[2]}
                wksOnLst={book.weeks_on_list}
                dscrpt={book.description}/>
    })

    return (
        <div className="mini-genre-container">
            <button onClick={null}>{props.genre.display_name}</button>
            <div className="mini-genre-books-container">
                {bookArr}
            </div>
        </div>
    )
}

export default MinGenre
