import React, {useState} from 'react'


function SrchBtns(props) {
    const [currPg, setPg] = useState(1);
    let pgArr = [];
//TODO(FIX PAGE RE RENDER, GET DIFF NUM OF PAGE BUTTONS ON NEW PAGE CLICK)
    function handlePgBtnClick(e)
        {//Set root var to no style curr page btn and disable click events (nth child)
        let pg = e.target.innerText
        let srchTxt = document.getElementById("search-bar").value
        setPg(pg)
        return props.onPgClick(srchTxt, props.srchTyp, pg)
        }

        function genPgBtns (pgTotal)
        {let total = pgTotal;
        if (total > 10)
            {total = 10;}
        for (let i = 1; i < total; i ++)
            {pgArr.push(<button onClick={handlePgBtnClick}>{i}</button>)}
        }
    genPgBtns(props.pgTotal);

    return  <p>{pgArr}</p>
            
}

const MemoSrchBtns = React.memo(SrchBtns, (prevProps, nextProps) => {
    if (prevProps === nextProps){return true}
    return false
})

export default MemoSrchBtns
