import React from "react";
import {Link} from "react-router-dom";
import {isLoading} from "../../../store/actions/pageActions";
import {updateSearchTxt, updateSearchTyp, } from "../../../store/actions/searchActions";
import {connect} from "react-redux";

function Search(props) {
  function handleSelectUpdate(e) {
    return props.dispatch(updateSearchTyp(e.target.value));
  }

  function handleSearchText(e) {
    return props.dispatch(updateSearchTxt(e.target.value));
  }

  function handleEnter(e) {
    if (e.keyCode === 13) {
      e.target.blur();
      return handleSearchSubmit(e);
    }
    return;
  }

  function handleSearchSubmit(e) {
    e.preventDefault();
    if (props.searchTxt === ""){
      return;
    }
    let searchLnk = document.getElementById("search-link");
    searchLnk.click()
  }

  return (
    <div className="search">
      <select
        className="search search__type"
        value={props.searchType}
        onChange={handleSelectUpdate}
        name="search-options"
      >
        <option value="title">Title</option>
        <option value="author">Author</option>
      </select>
      <input
        className="search search__input"
        type="text"
        placeholder="Search..."
        onChange={handleSearchText}
        onKeyDown={handleEnter}
        value={props.searchTxt}
      />
      <Link 
        id="search-link" 
        to={`/search/${props.searchType}=${props.searchTxt.replace(" ", "+")}&pg=1`}
        onClick={() => {
          if (props.searchTxt === props.page.text && props.searchType === props.page.type){
            return;
          }
            props.dispatch(isLoading(true))}}
        >
        <button className="search search__btn">
          Search
        </button>
      </Link>
    </div>
  );
}

const MemoSearch = React.memo(Search, (prevProps, nextProps) => {
  if (prevProps === nextProps) {
    return true;
  }
  return false;
});

const mapStateToProps = (state, ownProps) => {
  return {
    searchTxt: state.search.searchTxt,
    searchType: state.search.searchType,
    page: state.page
  }
}

export default connect(mapStateToProps)(MemoSearch)
