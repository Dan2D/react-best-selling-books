import React from 'react'


function MinBookSubInfo(props) {
    setTimeout()
    return (
        <div className="book-review-info">
            <p className="book-list-duration">{props.wksOnLst !== 1 ? props.wksOnLst +' Weeks On List...' : 'New This Week'}</p>
    </div>
    )
}

export default MinBookSubInfo
