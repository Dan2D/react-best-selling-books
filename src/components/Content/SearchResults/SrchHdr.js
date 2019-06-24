import React from 'react'

function SrchHdr(props) {
    return (
        <div>
            <h2>{props.author}</h2>
            <a href={props.authLnk} 
            rel='noopener noreferrer' 
            target='_blank'>
                More on the author...
            </a>
            <img src={props.authImg} alt={props.author}/>
        </div>
    )
}

const MemoSrchHdr = React.memo(SrchHdr, (prevProps, nextProps) => {
    if (prevProps.author === nextProps.author){return true}
    return false
})

export default MemoSrchHdr
