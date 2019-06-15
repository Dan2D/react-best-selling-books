import React, {useEffect, useState} from 'react'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";

function NavDate(props) {
    const [startDate, setDate] = useState(props.dateMax);
    useEffect(() => setDate(props.dateMax), [props.dateMax])
    function handleDtChng(date){
        setDate(date);
    }
// TODO(ADD FUNCTIONS FOR PREV WEEK NEXT WEEK W/CONDITION ON NEXT WEEK IF AT MAXDATE)
// ADD FALL BACK IF IN SEARCH RESULTS WHEN TRYING TO USE DATE SET TO HOME
    function handleDateSelect() {
        let srchDt = startDate.toISOString().substr(0,10);
        console.log(props.genreTxt, srchDt, "SEARCH")
        if (props.content === 'home')
            {return props.onDateChange(srchDt, props.content);}
        return props.onDateChange(srchDt, props.content, props.genreTxt);
    }

    return (
        <div>
            <button>{'<'} pevious week</button> 
            <DatePicker
                selected={startDate}
                onChange={handleDtChng}
                minDate={props.dateMin}
                maxDate={props.dateMax}
                peekNextMonth
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
            />
            <button> next week {'>'}</button>
            <button onClick={handleDateSelect}>GO</button>
        </div>
    )
}

export default NavDate
