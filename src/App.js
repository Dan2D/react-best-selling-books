import React, { Component } from 'react'
import Nav from "./components/Nav";
import Content from "./components/Content";
import API_CALLS from "./components/Utils/APICalls";
import "./App.css";

const {NYT_API_KEY,
        NYT_API,
        OVRVW_QRY,
        ATHR_QRY,
        TTL_QRY, 
        GNRE_QRY, 
        GNRE_LST_QRY} = API_CALLS['NYT'];

export default class App extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      navGenres: [],
      books: [],
      genres: [],
      content: 'home',
      searchTxt: '',
      genreTxt: '',
      isLoading: false,
      error: null,
    }
  }

  fetchURL = (input, state, property, results='results') => {
      let stateObj = {};
      return fetch(input)
      .then(response => {
        if(response.ok)
          {return response.json()}
        else
          {throw new Error('Something went wrong...')}})
      .then(data => {
          stateObj[state] = property != null ? 
            data[results][property] :
            stateObj[state] = data[results];
          this.setState(stateObj);})
      }

  setLoadAndCatch = (fetchUrl) => {
      console.log("content", this.state.content)
      fetchUrl.then(() => this.setState({isLoading: false}))
      .catch(error => this.setState({error, isLoading: false}))
    }

  goHome = () => {
    this.setState({content: 'home', isLoading: true})
      this.fetchURL(NYT_API+OVRVW_QRY+'api-key='+NYT_API_KEY, 'genres', 'lists')
      .then(() => this.setState({isLoading: false}))
      .catch(error => this.setState({error, isLoading: false}))
    }
  
  componentDidMount() {
      let navGenres = this.fetchURL(NYT_API+GNRE_LST_QRY+'&api-key='+NYT_API_KEY, 'navGenres');
      let homeContent = this.fetchURL(NYT_API+OVRVW_QRY+'api-key='+NYT_API_KEY, 'genres', 'lists');
      this.setState({isLoading: true, content: 'home'})
      Promise.all([navGenres, homeContent])
      .then(() => this.setState({isLoading: false}))
      .catch(error => this.setState({error, isLoading: false}))
    }
  
handleGenreUpdate = (genreTxt) => {
    console.log(genreTxt, "HANDLE GENRE WAS CALLED")
    this.setState({genreTxt: genreTxt, content: 'genre', isLoading: true, searchTxt: ""});
    this.fetchURL(NYT_API+GNRE_QRY+genreTxt+'.json?api-key='+NYT_API_KEY, 'genres')
    .then(() => this.setState({isLoading: false}))
    .catch(error => this.setState({error, isLoading: false}))
    };

  render() {
    const {navGenres,
           genres,
           content, 
           isLoading, 
           error} = this.state;
    if (error) {return <p>{error.message}</p>}
    return (
      <div className="App">
        <Nav
        onHomeClick={this.goHome}
        onSubGenreClick={this.handleGenreUpdate}
        navGenres={navGenres}/>
        <Content
        content={content}
        isLoading={isLoading}
        onGenreClick={this.handleGenreUpdate}
        genres={genres}/>
      </div>
    )
  }
}

