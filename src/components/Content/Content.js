import React, { Component } from "react";

import Home from "./Home/Home";
import { connect } from "react-redux";
import { getHomeContent } from "../../store/actions/pageActions";
import GenreBks from "./Genre-View/GenreBks";
import SrchRslt from "./SearchResults/SrchRslt";
import SnglBk from "./Books/Single-View/SingleBk";
import smoothscroll from "smoothscroll-polyfill";
import "./Content.css";

class Content extends Component {
  componentDidMount() {
    this.props.dispatch(getHomeContent);
  }
  render() {
    smoothscroll.polyfill();
    window.scrollTo(0, 0);
    let content;

    if (this.props.content === "home") {
      content = <Home genreLst={this.props.genreLst} />;
    } else if (this.props.content === "genre") {
      content = (
        <GenreBks
          dateMin={this.props.dateMin}
          dateMax={this.props.dateMax}
          content={this.props.content}
          genre={this.props.genreLst}
        />
      );
    } else if (this.props.content === "search") {
      content = <SrchRslt />;
    } else {
      content = (
        <div className="book-single-container">
          <SnglBk />
        </div>
      );
    }

    return (

        <div className="content-container">{content}</div>

    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    genreLst: state.page.genres,
    content: state.page.content,
    genreTxt: state.page.genreTxt,
    dateMin: state.date.dateMin,
    dateMax: state.date.dateMax,
    dateCurr: state.date.dateCurr
  };
};

export default connect(mapStateToProps)(Content);
