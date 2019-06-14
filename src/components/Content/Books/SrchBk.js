import React from 'react'

function SrchBk(props) {
    //Make a function that assigns all these values for you
    let title = props.book.querySelector('title_without_series').textContent;
    let coverImg = props.book.querySelector('small_image_url').textContent;
    let rvwLnk = props.book.querySelector('link').textContent;
    let pubDt = props.book.querySelector('publication_year').textContent
    console.log(rvwLnk)
    return (
        <div>
            <h5>{title}</h5>
            <img src={coverImg} alt={title}/>
            <a href={rvwLnk} rel='noopener noreferrer'  target="_blank">...more info</a>
            <p>Published: {pubDt}</p>
        </div>
    )
}

export default SrchBk
