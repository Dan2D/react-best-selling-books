import React, {useEffect, useState} from 'react'
import Book from "./Books/Book";
import API_CALLS from "./Utils/APICalls";


const {GR_KEY, GR_API, GR_RVW_QRY, GR_RTNG_QRY} = API_CALLS['GR']

function GenreBks(props) {
    console.log(props.genre, "BOOKS")
    const [ratings, setRatings] = useState({});
    var isbnArr = props.genre.books.map(book=> {
        let indx = book['isbns'].length-1;
        if (indx >= 0)
            {return book['isbns'][indx]['isbn13']}
        else
            {return book['primary_isbn13']}
        });
    let isbnTxt = isbnArr.join(",").toString();

    useEffect(() => {
        fetch('https://cors-anywhere.herokuapp.com/'+GR_API+GR_RVW_QRY+isbnTxt+'&key='+GR_KEY)
        .then(resp => resp.json())
        .then(data => setRatings(data['books'])) 
    }, [isbnTxt, props.genre.books])

    let bookArr = Object.keys(ratings).length > 0 ?
        props.genre.books.map((book) => {
        let indx = book['isbns'].length-1;
        let rating = 0;
        let isbn = indx >= 0 ? book.isbns[indx]['isbn13'] : null;
        for (let i = 0; i < ratings.length; i++){
            console.log(i, isbn)
            if (ratings[i]['isbn13'] === isbn || ratings[i]['isbn'] === isbn)
            {
                console.log(i, isbn, ratings[i]);
                rating = ratings[i].average_rating;
            }   
        }
        return <Book 
                key={book.title}
                type='genre' 
                onClick={null}
                handleRatingClick={null} 
                book={book}
                title={book.title}
                author={book.author}
                bkImg={book.book_image} 
                rank={book.rank} 
                dscrpt={book.description}
                rating={rating}
                buyLnk={book.buy_links[1]}/>
    }) : <div>LOADING</div>;

   
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
