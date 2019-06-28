import React from 'react'
import SrchHdr from "./SearchResults/SrchHdr";
import SrchBk from "./Books/SrchBk";
import SrchBtns from "./SearchResults/SrchBtns";
import NotFound from "./NotFound";

function SrchRslt(props) {
    if (props.books.querySelector('author name') == null)
        {return <NotFound />}
    let bkDataArr = []
    let authorInfo, authorHome, authorLnk, authorImg, indxStrt, pgTotal, bksPrPg;
    let author = props.books.querySelector('author name').textContent;

    if (props.srchTyp === 'title')
        {indxStrt = props.books.querySelector('results-start').textContent;
        indxStrt = parseInt(indxStrt);
        pgTotal = props.books.querySelector('search total-results').textContent;
        bksPrPg = 20;
        props.books.querySelectorAll('search results work').forEach(book => bkDataArr.push(book));
        }

    if (props.srchTyp === 'author')
        {authorImg = props.books.querySelector('author image_url').textContent;
        authorLnk = props.books.querySelector('author link').textContent;
        authorInfo = props.books.querySelector('author about').textContent;
        authorHome = props.books.querySelector('author hometown').textContent;
        // indxStrt = props.books.querySelector('books').getAttribute('start');
        // indxStrt = parseInt(indxStrt);
        // pgTotal = props.books.querySelector('books').getAttribute('total');
        // bksPrPg= 30;
        props.books.querySelectorAll('author books book').forEach(book => bkDataArr.push(book));
        }

    pgTotal = Math.ceil(pgTotal/bksPrPg);    

    let bookCode = bkDataArr.map((book, indx) => {
        return <SrchBk
                key={author+indx}
                onAuthClick={(author, srchTyp) => props.onAuthClick(author, srchTyp)}
                srchTyp={props.srchTyp} 
                author={author}
                indx={indxStrt+indx} 
                book={book} />});
    return (
        <div className="srch-container">
            {props.srchTyp === 'author' ? 
                <SrchHdr
                author={author}
                authorDscrpt={authorInfo}
                homeTown={authorHome}
                authLnk={authorLnk}
                authImg={authorImg} /> 
                :  <h2>TITLE SEARCH RESULTS</h2>
            }
            <div className="srch-bk-list">
            {bookCode}
            </div>
            {props.srchTyp === "author" ? null :
            <SrchBtns
                onPgClick={(srchTxt, srchTyp, pg) => props.onPgClick(srchTxt, srchTyp, pg)}
                srchTyp={props.srchTyp}
                pg={props.pg}
                pgTotal={pgTotal}/>}
        </div>
    )
}

export default SrchRslt
