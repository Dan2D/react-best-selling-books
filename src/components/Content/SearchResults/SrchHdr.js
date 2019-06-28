import React, {useEffect} from 'react'

function SrchHdr(props) {
    useEffect(() => {
        document.getElementById("authorInfo").innerHTML = props.authorDscrpt;
    })


    return (
        <div className="srch-author-container">
            <div className="author-main">
            <img src={props.authImg} alt={props.author}/>
            <h2 className="srch-author-container__auth-name">{props.author}</h2>
            <p>Home: {props.homeTown}</p>
            <a href={props.authLnk} 
            rel='noopener noreferrer' 
            target='_blank'>
                More on the author...
            </a>
            </div>
            <div id="authorInfo">
            </div>
        </div>
    )
}

const MemoSrchHdr = React.memo(SrchHdr, (prevProps, nextProps) => {
    if (prevProps.author === nextProps.author || prevProps.authorDscrpt === nextProps.authorDscrpt){return true}
    return false
})

export default MemoSrchHdr
