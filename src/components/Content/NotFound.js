import React from 'react'
import bookImg from "../../Images/404.png";

function NotFound(props) {
    return (
        <div className="no-results">
            <img src={bookImg} alt="book-stack"></img>
            <p>Sorry, We Couldn't Find What You're Looking For....</p>
        </div>
    )
}

export default NotFound
