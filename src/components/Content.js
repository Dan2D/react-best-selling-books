import React from 'react'
import Home from "./Content/Home";
import GenreBks from "./Content/GenreBks";
import SrchRslt from "./Content/SrchRslt"


function Content (props) {
    console.log(props.content, "CONTENT")
        if (props.isLoading){
            return <div>LOADING...</div>
        }
        let content;
        if (props.content === 'home'){
            content = <Home
                      genreLst={props.genres}
                      onGenreClick={(genreName) => props.onGenreClick(genreName)} />
          }
          if (props.content === 'genre'){
            content = <GenreBks   
                        genre={props.genres}/>
          }
          if(props.content === 'search') 
          {content = <SrchRslt
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