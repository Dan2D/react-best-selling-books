import React from 'react'
import Home from "./Content/Home";
import GenreBks from "./Content/GenreBks";
import SrchRslt from "./Content/SrchRslt"


function Content (props) {
    console.log(props.content, "CONTENT LOADED")
        if (props.isLoading){
            return <div>LOADING...</div>
        }
        let content;
        if (props.content === 'home'){
            content = <Home
                      onAuthClick={(author, srchTyp) => props.onAuthClick(author, srchTyp)}
                      onGenreClick={(genreName, minDate, maxDate) => props.onGenreClick(genreName, minDate, maxDate)}
                      genreLst={props.genres} />
          }
          if (props.content === 'genre'){
            content = <GenreBks
                        onAuthClick={(author, srchTyp) => props.onAuthClick(author, srchTyp)}dateMin={props.dateMin}
                        dateMax={props.dateMax}  
                        genre={props.genres}/>
          }
          if(props.content === 'search') 
          {content = <SrchRslt
                    onPgClick={(srchTxt, srchTyp, pg) => props.onPgClick(srchTxt, srchTyp, pg)}
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
        prevProps.isLoading === nextProps.isLoading && 
        prevProps.books === nextProps.books)
        {return true;}
    return false;
})

export default MemoContent;