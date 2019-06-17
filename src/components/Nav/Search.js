import React from 'react'

function Search(props) {
    const handleSelectUpdate = (e) => {
        return props.onSelectUpdate(e.target.value);
    }
    const handleSearchText = (e) => {
        return props.onSearchUpdate(e.target.value);
    }
    const handleEnter = (e) => {
        if(e.keyCode === 13){return handleSearchSubmit(e.target.value)}
        return
    }
    const handleSearchSubmit = () => {
        let searchTyp = document.getElementById("search-type").value;
        return props.onSearchSubmit(props.searchTxt, searchTyp);
    }

    return (
        <div className="search-container">
            <select id="search-type"
            value={props.searchTyp}
            onChange={handleSelectUpdate} 
            name="search-options">
                <option value="title">Title</option>
                <option value="author">Author</option>
            </select>
            <input id="search-bar"
             type="text"
             placeholder="Search..." 
             onChange={handleSearchText}
             onKeyDown={handleEnter}
             value={props.searchTxt}/>
            <button onClick={handleSearchSubmit}>Search</button>
        </div>
    )
}

const MemoSearch = React.memo(Search, (prevProps, nextProps) => {
    if (prevProps === nextProps){return true}
    return false
})

export default MemoSearch
