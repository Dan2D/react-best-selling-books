import React from 'react'
import Home from "./Content/Home";
import GenreBks from "./Content/GenreBks";
import SrchRslt from "./Content/SrchRslt"


function Content (props) {
    console.log("CONTENT LOADED")
    function handleAuthClick(author, srchTyp){
        return props.onAuthClick(author, srchTyp);
    }
        let content;
        if (props.content === 'home'){
            content = <Home
                      onAuthClick={handleAuthClick}
                      onGenreClick={(genreName, minDate, maxDate) => props.onGenreClick(genreName, minDate, maxDate)}
                      genreLst={props.genres} />
          }
          if (props.content === 'genre'){
            content = <GenreBks
                        onAuthClick={handleAuthClick}
                        dateMin={props.dateMin}
                        dateMax={props.dateMax}  
                        genre={props.genres}/>
          }
          if(props.content === 'search') 
          {content = <SrchRslt
                    onPgClick={(srchTxt, srchTyp, pg) => props.onPgClick(srchTxt, srchTyp, pg)}
                    onAuthClick={handleAuthClick}
                    srchTyp={props.srchTyp}
                    books={props.books}/>}
        return (
            <div>
                {content}
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