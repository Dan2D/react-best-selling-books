import React from 'react';
import './App.css';

function Loading(props) {
    console.log(props.contet)
    return (
                <div className={props.isLoading ? "loading loading-active" : "loading"} >
                    <img src={require("../Images/book-flat.png")} alt="book" />
                </div>
    )
}

export default Loading
