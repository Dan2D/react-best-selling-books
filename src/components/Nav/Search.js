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
        return props.onSearchSubmit(props.searchTxt);
    }

    return (
        <div className="search-container">
            <select 
            // value={props.type}
            onChange={handleSelectUpdate} 
            name="search-options">
                <option value="title">Title</option>
                <option value="author">Author</option>
            </select>
            <input type="text"
             placeholder="Search..." 
             onChange={handleSearchText}
             onKeyDown={handleEnter}
             value={props.searchTxt}/>
            <button onClick={handleSearchSubmit}>Search</button>
        </div>
    )
}

export default React.memo(Search);
