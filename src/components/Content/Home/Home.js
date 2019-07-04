import React from "react";
import MinGenre from "./MinGenre";

function Home(props) {
  if (props.genreLst.length > 0) {
    console.log("HOME LOADED");
    var mainGenres = props.genreLst.slice(0, 5);
    var minGenreLst = [];
    function genMinGenre(genreLst) {
      for (let i = 0; i < 5; i++) {
        minGenreLst.push(
          <MinGenre
            key={genreLst[i].display_name}
            books={genreLst[i].books}
            genre={genreLst[i]}
          />
        );
      }
    }
    genMinGenre(mainGenres);
  }
  return <div>{minGenreLst}</div>;
}

export default Home;
