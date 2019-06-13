import React from 'react'

function NavGenreBtns(props) {

    function genGenreBtns(array){
        return array.map(btn => {
            return <button key={btn.display_name}
                           data-name={btn.list_name_encoded} 
                           onClick={() => props.onSubGenreClick(btn.list_name_encoded)}>
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
