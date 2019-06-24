import React from 'react'
import SrchHdr from "./SearchResults/SrchHdr";
import SrchBk from "./Books/SrchBk";
import SrchBtns from "./SearchResults/SrchBtns";
import NotFound from "./NotFound";
import smoothscroll from "smoothscroll-polyfill";

function SrchRslt(props) {
    smoothscroll.polyfill();
    if (props.books.querySelector('author name') == null)
        {return <NotFound />}
    window.scrollTo(0,0)
    let bkDataArr = []
    let authorLnk, authorImg, pgTotal, bksPrPg;
    let author = props.books.querySelector('author name').textContent;
    if (props.srchTyp === 'title')
        {pgTotal = props.books.querySelector('search total-results').textContent;
        bksPrPg = 20;
        props.books.querySelectorAll('search results work').forEach(book => bkDataArr.push(book));
        }
    if (props.srchTyp === 'author')
        {authorImg = props.books.querySelector('authors author image_url').textContent;
        authorLnk = props.books.querySelector('author link').textContent;
        pgTotal = props.books.querySelector('books').getAttribute('total');
        bksPrPg= 30;
        props.books.querySelectorAll('author books book').forEach(book => bkDataArr.push(book));
        }
    pgTotal = Math.ceil(pgTotal/bksPrPg);    

    let bookCode = bkDataArr.map((book, indx) => {
        return <SrchBk
                key={author+indx}
                onAuthClick={(author, srchTyp) => props.onAuthClick(author, srchTyp)} 
                srchTyp={props.srchTyp} 
                author={author} 
                book={book} />});
    return (
        <div>
            {props.srchTyp === 'author' ? 
            <SrchHdr
                author={author}
                authLnk={authorLnk}
                authImg={authorImg} /> :  <h2>TITLE SEARCH RESULTS</h2>}
            {bookCode}
            <SrchBtns
                onPgClick={(srchTxt, srchTyp, pg) => props.onPgClick(srchTxt, srchTyp, pg)}
                srchTyp={props.srchTyp}
                pgTotal={pgTotal}/>
        </div>
    )
}

export default SrchRslt
