import React from 'react'

function NavGenreBtns(props) {
    function handleGenreClick(e){
        let genre = e.target.dataset.name;
        let minDate = e.target.dataset.minDate;
        let maxDate = e.target.dataset.maxDate;
        return props.onGenreClick(genre, minDate, maxDate );
    }

    function genGenreBtns(array){
        return array.map(btn => {
            return <button key={btn.display_name}
                           data-name={btn.list_name_encoded}
                           data-min-date={btn.oldest_published_date}
                           data-max-date={btn.newest_published_date} 
                           onClick={handleGenreClick}>
                    {btn.display_name}
                    </button>
        })
    }
    return (
        <div className='sub-genre-btns-container'>
            {genGenreBtns(props.subGenres)}
        </div>
    )
}

export default NavGenreBtns
