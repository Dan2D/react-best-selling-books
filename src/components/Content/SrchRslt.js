import React from 'react'
import SrchHdr from "./SearchResults/SrchHdr";
import SrchBk from "./Books/SrchBk";
import SrchBtns from "./SearchResults/SrchBtns";
import NotFound from "./NotFound";

function SrchRslt(props) {
    if (props.books.querySelector('author name') == null)
        {return <NotFound />}
    let bkDataArr = []
    let authorLnk, authorImg, pgTotal, bksPrPg;
    let author = props.books.querySelector('author name').textContent;
    if (props.srchTyp === 'title')
        {pgTotal = props.books.querySelector('search total-results').textContent;
        bksPrPg = props.books.querySelector('search results-end').textContent;
        props.books.querySelectorAll('search results work').forEach(book => bkDataArr.push(book));
        }
    if (props.srchTyp === 'author')
        {authorImg = props.books.querySelector('authors author image_url').textContent;
        authorLnk = props.books.querySelector('author link').textContent;
        pgTotal = props.books.querySelector('books').getAttribute('total');
        bksPrPg= props.books.querySelector('books').getAttribute('end')
        props.books.querySelectorAll('author books book').forEach(book => bkDataArr.push(book));
        }
    pgTotal = Math.ceil(pgTotal/bksPrPg);    

    let bookCode = bkDataArr.map((book, indx) => {
        return <SrchBk
                key={author+indx} 
                srchTyp={props.srchTyp} 
                author={author} 
                book={book} />});
    return (
        <div>
            {props.srchTyp === 'author' ? 
            <SrchHdr
                author={author}
                authLnk={authorLnk}
                authImg={authorImg} /> :  null}
            {bookCode}
            <SrchBtns
                onPgClick={(srchTxt, srchTyp, pg) => props.onPgClick(srchTxt, srchTyp, pg)}
                srchTyp={props.srchTyp}
                pgTotal={pgTotal}/>
        </div>
    )
}

export default SrchRslt
