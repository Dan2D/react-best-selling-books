import React from 'react'
import Home from "./Content/Home";
import GenreBks from "./Content/GenreBks";
import SrchRslt from "./Content/SrchRslt";
import Book from "./Content/Books/Book";
import smoothscroll from "smoothscroll-polyfill";


function Content (props) {
    console.log("CONTENT LOADED")
    smoothscroll.polyfill();
    window.scrollTo(0,0);
    function handleAuthClick(author, srchTyp){
        return props.onAuthClick(author, srchTyp);
    }
    let content;
        
        if (props.content === 'home')
            {content = <Home
                      onTtlClick={(book) => props.onTtlClick(book)}
                      onAuthClick={handleAuthClick}
                      onGenreClick={(genreName, minDate, maxDate) => props.onGenreClick(genreName, minDate, maxDate)}
                      genreLst={props.genres} />
          }
          else if (props.content === 'genre')
            {content = <GenreBks
                        onAuthClick={handleAuthClick}
                        dateMin={props.dateMin}
                        dateMax={props.dateMax}  
                        genre={props.genres}/>
          }
          else if(props.content === 'search') 
            {content = <SrchRslt
                        onPgClick={(srchTxt, srchTyp, pg) => props.onPgClick(srchTxt, srchTyp, pg)}
                        onAuthClick={handleAuthClick}
                        srchTyp={props.srchTyp}
                        books={props.books}/>}
        else
            {content =  <div className='book-single-container'>
                            <Book
                            type='book' 
                            onAuthClick={(author, srchTyp) => props.onAuthClick(author, srchTyp)}
                            book={props.books}/>
                        </div>}
        
        return (
            
            <div className='content-container'>
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