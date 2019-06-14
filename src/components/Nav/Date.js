import React, {useState} from 'react'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";

function NavDate(props) {
    const [startDate, setDate] = useState(new Date());

    function handleDtChng(date){
        setDate(date);
        let srchDt = date.toISOString().substr(0,10);
        console.log(props.content)
        if (props.content === 'home')
            {return props.onHomeDateChange(srchDt);}
        return props.onGenreDateChange(props.genreTxt, srchDt);
    }
    // let setDate = new Date().toISOString().substr(0,10);
    // console.log(setDate)
    return (
        <div>
            <button>{'<'} pevious week</button> 
            <DatePicker
                selected={startDate}
                onChange={handleDtChng}
                peekNextMonth
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
            />
            <button> next week {'>'}</button>
        </div>
    )
}

export default NavDate
