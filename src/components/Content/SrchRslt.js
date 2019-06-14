import React from 'react'
import SrchBk from "./Books/SrchBk";

// TODO(ADD FALLBACK FOR NO RESULTS FOUND)
// TODO(ADD FUNCTION TO GEN PAGES UP TO pgNum and redirect search results on what page clicked)
function SrchRslt(props) {
    let bookArr = []
    let pgNum = props.books.querySelector('books').getAttribute('total');
    pgNum = Math.ceil(pgNum/30);

    props.books.querySelectorAll('author books book').forEach(book => bookArr.push(book));
    let bookCode = bookArr.map(book => {
    return <SrchBk
            book={book} />})
    let author = props.books.querySelector('author name').textContent;
    let authorLnk = props.books.querySelector('author link').textContent;
    let authorImg = props.books.querySelector('authors author image_url').textContent
    return (
        <div>
            <a href={authorLnk} rel='noopener noreferrer' target='_blank'>{author}</a>
            <h2>{author}</h2>
            <img src={authorImg} alt={author}/>
            {bookCode}
            <p>{pgNum}</p>
        </div>
    )
}

export default SrchRslt
