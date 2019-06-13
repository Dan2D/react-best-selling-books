import React, { Component } from 'react'
import Home from "./Content/Home";
import GenreBks from "./Content/GenreBks";


export default class Content extends Component {

    
    render() {
        console.log(this.props.content, "NEW GENRES")
        if (this.props.isLoading){
            return <div>LOADING...</div>
        }
        let content;
        if (this.props.content === 'home'){
            content = <Home
                      genreLst={this.props.genres}
                      onGenreClick={(genreName) => this.props.onGenreClick(genreName)} />
          }
          if (this.props.content === 'genre'){
            content = <GenreBks    
                      genre={this.props.genres}/>
          }
        return (
            <div>
                {content}
            </div>
        )
    }
}
