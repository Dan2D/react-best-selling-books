import React, {useState} from 'react'
import smoothscroll from "smoothscroll-polyfill";


function SrchBtns(props) {
    const [currPg, setPg] = useState(1);
    let pgArr = [];
    smoothscroll.polyfill();

    function handlePgBtnClick(pg){
        window.scrollTo(0,0);
        console.log(pg)
        let srchTxt = document.getElementsByClassName("search__input")[0].value;
        setPg(parseInt(pg));
        return props.onPgClick(srchTxt, props.srchTyp, pg);
        }

        function genPgBtns (pgTotal) {
            let total = pgTotal;
                let end = currPg + 5;
                if (end > total)
                    {end = total+1;}
                let i = currPg - 4;
                if (i <= 2)
                    {i = 1;
                    end = 10}
                else if (i + 6 >= total)
                    {i = total - 8;}
            for (i; i < end; i ++)
                {pgArr.push(<button key={i}
                            className={i === currPg ? "current-pg" : null}
                            onClick={(e) => handlePgBtnClick(e.target.innerText)}>
                            {i}
                </button>)}
            }
    genPgBtns(props.pgTotal);

    return  <div className="srch-pagination">
                {currPg > 4 ? <button onClick={() => handlePgBtnClick(1)}>{"<"}</button> : null}
                {pgArr}
                {currPg + 4 < props.pgTotal ? <button onClick={() => handlePgBtnClick(props.pgTotal)}>{">"}</button> : null}
            </div>       
}

export default SrchBtns
