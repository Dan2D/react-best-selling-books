import React, {Component} from "react";
import {getHomeContent} from "../../../store/actions/pageActions";
import { connect } from "react-redux";
import Loading from "../../Loading";
import MinGenre from "./MinGenre";
import '../../App.css';

class Home extends Component{
  componentDidMount(){
    this.props.dispatch(getHomeContent);
  }

  render(){
    if (this.props.isLoading) {
      return <Loading isLoading={this.props.isLoading}/>
    }
    if (this.props.genreLst.length > 0){
      var mainGenres = this.props.genreLst.slice(0, 5);
      var minGenreLst = [];
      function genMinGenre(genreLst) {
        for (let i = 0; i < 5; i++) {
          minGenreLst.push(
            <MinGenre
              key={genreLst[i].display_name}
              books={genreLst[i].books}
              genre={genreLst[i]}
            />
          );
        }
      }
      genMinGenre(mainGenres);
    }
    return <div className="overview-container">{minGenreLst}</div>;  
  }
}
 
const mapStateToProps = (state, ownProps) => {
  return {
    genreLst: state.page.genres,
    isLoading: state.page.isLoading
  };
};
export default connect(mapStateToProps)(Home)
