import React from 'react'
import Home from "./Content/Home";
import GenreBks from "./Content/GenreBks";
import SrchRslt from "./Content/SrchRslt";
import SnglBk from "./Content/Books/SingleBk";
import smoothscroll from "smoothscroll-polyfill";

function Content (props) {
    console.log("CONTENT LOADED")
    smoothscroll.polyfill();
    window.scrollTo(0,0);

    let content;

    function handleAuthClick(author, srchTyp){
        return props.onAuthClick(author, srchTyp);
    }
    
    if (props.content === 'home')
        {content = <Home
                    onBkClick={(cover, isbn) => props.onBkClick(cover, isbn)}
                    onAuthClick={handleAuthClick}
                    onGenreClick={(genreName, minDate, maxDate) => props.onGenreClick(genreName, minDate, maxDate)}
                    genreLst={props.genres}/>}
    else if (props.content === 'genre')
        {content = <GenreBks
                    onBkClick={(cover, isbn) => props.onBkClick(cover, isbn)}
                    onAuthClick={handleAuthClick}
                    dateMin={props.dateMin}
                    dateMax={props.dateMax}  
                    genre={props.genres}/>}
    else if(props.content === 'search') 
        {content = <SrchRslt
                    onPgClick={(srchTxt, srchTyp, pg) => props.onPgClick(srchTxt, srchTyp, pg)}
                    onAuthClick={handleAuthClick}
                    pg={props.pg}
                    srchTyp={props.srchTyp}
                    books={props.books}/>}
    else
        {content =  <div 
                    className='book-single-container'>
                        <h4>
                            {props.books.title}
                        </h4>
                        <SnglBk
                        type='book' 
                        onAuthClick={(author, srchTyp) => props.onAuthClick(author, srchTyp)}
                        bkCover={props.bkCover}
                        book={props.books}/>
                    </div>}
    
    return (
        
        <div 
        className='content-container'>
            {content }
        </div>
    )

}

const MemoContent = React.memo(Content, (prevProps, nextProps) => {
    if (prevProps.genres === nextProps.genres && 
        prevProps.books === nextProps.books)
        {return true;}
    return false;
})

export default MemoContent;