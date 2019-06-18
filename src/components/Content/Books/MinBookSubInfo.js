import React from 'react'


function MinBookSubInfo(props) {


    
    return (
        <div className="book-review-info">
            <p className="book-list-duration">{props.wksOnLst !== 1 ? props.wksOnLst +' Weeks On List...' : 'New This Week'}</p>
            <p className='book-description'>Description...</p>
            <p >{props.dscrpt === "" ? 'No Description Available...' : props.dscrpt}</p>
    </div>
    )
}

export default MinBookSubInfo
