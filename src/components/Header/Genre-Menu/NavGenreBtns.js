import React from "react";
import {connect} from "react-redux";
import {Link} from 'react-router-dom';
import {genreView} from "../../../store/actions/pageActions";

function NavGenreBtns(props) {

  function handleGenreClick(e) {
    let genre = e.target.dataset.name;
    let minDate = e.target.dataset.minDate;
    let maxDate = e.target.dataset.maxDate;
    props.dispatch(genreView(genre, minDate, maxDate));
    e.target.parentElement.style.visibility = "hidden";
  }

  function handleSubGenreMenu(e) {
    e.target.style.visibility = "hidden";
    e.target.parentElement.firstChild.firstChild.style.color = "";
    e.target.parentElement.firstChild.style.background = "";
  }

  function genGenreBtns(array) {
    return array.map(btn => {
      return (
        <button
          key={btn.display_name}
          data-name={btn.list_name_encoded}
          data-min-date={btn.oldest_published_date}
          data-max-date={btn.newest_published_date}
          onMouseDown={handleGenreClick}
        >
          <Link to={`/${btn.list_name_encoded}`}>
            {btn.display_name}
          </Link>
        </button>
      );
    });
  }

  return (
    <div
      className="genre-menu__btns"
      data-ref={props.title}
      tabIndex="-1"
      onBlur={e => handleSubGenreMenu(e)}
    >
      {genGenreBtns(props.subGenres)}
    </div>
  );
}

export default connect(null)(NavGenreBtns)
