import React from "react";
import {updateSearchTxt, updateSearchTyp, } from "../../../store/actions/searchActions";
import {getSearchTitle, getSearchAuth} from "../../../store/actions/pageActions";
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
      return handleSearchSubmit(e.target.value);
    }
    return;
  }

  function handleSearchSubmit() {
    if (props.searchType === 'title'){
      return props.dispatch(getSearchTitle(props.searchTxt));
    }
    return props.dispatch(getSearchAuth(props.searchTxt));
  }

  return (
    <div className="search">
      <input
        className="search search__input"
        type="text"
        placeholder="Search..."
        onChange={handleSearchText}
        onKeyDown={handleEnter}
        value={props.searchTxt}
      />
      <select
        className="search search__type"
        value={props.searchType}
        onChange={handleSelectUpdate}
        name="search-options"
      >
        <option value="title">Title</option>
        <option value="author">Author</option>
      </select>
      <button className="search search__btn" onClick={handleSearchSubmit}>
        Search
      </button>
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
  }
}

export default connect(mapStateToProps)(MemoSearch)
