import React, {useEffect} from 'react'
import BookMainInfo from "./BookMainInfo";
import MinBookSubInfo from "./MinBookSubInfo";
import BookSubInfo from "./BookSubInfo";



function Book(props) {

    return (
        <div className="book-container">
            <BookMainInfo
                    key={props.title+'main-info'}
                    title={props.title}
                    author={props.author}
                    bkImg={props.bkImg}
                    rank={props.rank} />
                    {props.type === 'overview' ?
                        <MinBookSubInfo 
                        key={props.title+'min-sub-info'}
                        wksOnLst={props.wksOnLst}
                        buyLnk={props.buyLnk}
                        dscrpt={props.dscrpt}/> 
                        :
                        <BookSubInfo 
                        key={props.title+'sub-info'}
                        buyLnk={props.buyLnk}
                        isbn={props.isbn}
                        rating={props.rating}
                        dscrpt={props.dscrpt}/>
                    }
                    

        </div>
    )
}

export default Book
