import React from "react";
import NavSubGenre from "./NavSubGenre";
import {connect} from "react-redux";
import {getGenres} from "../../../store/actions/menuActions";

function NavGenres(props) {
  let genreObj = { navSubGenres: [] };

  function genGenreArr(filterTxt, flags, searchType) {
    let regxStr = new RegExp(filterTxt, flags);
    if (searchType) {
      return props.menu.filter(genre =>
        regxStr.test(genre["display_name"])
      );
    } else {
      return props.menu.filter(
        genre => !regxStr.test(genre["display_name"])
      );
    }
  }

  function genGenreSubObj(title, array) {
    let obj = {};
    obj["title"] = title;
    obj["array"] = array;
    return obj;
  }

  function genGenreMainObj(title, array) {
    genreObj.navSubGenres.push(genGenreSubObj(title, array));
  }

  let genreFicAndNonArr = genGenreArr(".fiction", "i", true);
  let genreYngAdult = genGenreArr("adult", "i", true);
  let genreKids = genGenreArr("children", "i", true);
  let genreMisc = genGenreArr(".fiction|children|adult", "i", false);
  genGenreMainObj("Fiction/Non-Fiction", genreFicAndNonArr);
  genGenreMainObj("Young Adult", genreYngAdult);
  genGenreMainObj("Children's Books", genreKids);
  genGenreMainObj("Misc.", genreMisc);

  return (
    <div className="genres">
      <NavSubGenre
        onGenreClick={(genre, minDate, maxDate) =>
          props.onGenreClick(genre, minDate, maxDate)
        }
        genreLst={genreObj.navSubGenres}
      />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    menu: state.menu
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getGenres: () => {
      dispatch(getGenres);
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(NavGenres)
