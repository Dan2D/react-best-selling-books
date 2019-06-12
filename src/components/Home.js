import React from 'react'
import MinGenre from "./Books/MinGenre"

function Home(props) {

    if (props.genreLst){
    console.log(props)
    var mainGenres = props.genreLst.slice(0,5);
    var minGenreLst = [];
    function genMinGenre(genreLst){
        for (let i = 0; i < 5; i++){
             minGenreLst.push(
            <MinGenre
            key={genreLst[i].display_name} 
            books={genreLst[i].books} 
            genre={genreLst[i]}
            genreClick={null}/>)
        }
    }
    genMinGenre(mainGenres);
}

    return (
        <div>
            {minGenreLst}
        </div>
    )
}

export default Home
