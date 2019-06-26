import React, {useState} from 'react'


function SrchBtns(props) {
    const [currPg, setPg] = useState(1);
    let pgArr = [];

    function handlePgBtnClick(e)
        {let pg = e.target.innerText;
        let srchTxt = document.getElementsByClassName("search__input")[0].value;
        setPg(parseInt(pg));
        return props.onPgClick(srchTxt, props.srchTyp, pg);
        }
// TODO(Button logic to only show 10 button but re-render button num to inc as select upper pages)

        

        function genPgBtns (pgTotal)
        {let total = pgTotal;
        if (total > 10)
            {total = 10;}
        for (let i = 1; i < total; i ++)
            {pgArr.push(<button key={i}
                                 className={i === currPg ? "current-pg" : null}
                                 onClick={handlePgBtnClick}>
                                 {i}
                        </button>)}
        }
    genPgBtns(props.pgTotal);

    return  <div className="srch-pagination">{pgArr}</div>       
}

export default SrchBtns
