import React, { Component } from 'react'
import Home from "./components/Home";
import GenreBks from "./components/GenreBks";
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
       books: [],
       genres: [],
       type: 'overview',
       searchTxt: '',
       genreTxt: '',
       isLoading: false,
       error: null,
    }
  }

  componentDidMount() {
    this.setState({isLoading: true, type: 'overview'})
    this.goHome(NYT_API+OVRVW_QRY+'api-key='+NYT_API_KEY, 'genres', 'lists')
  }
  

fetchURL = (input, state, property, results='results') => {
  let stateObj = {};
  return fetch(input)
  .then(response => {
    if(response.ok){return response.json()}
    else{throw new Error('Something went wrong...')}
  })
  .then(data => {
    stateObj[state] = property ? 
      data[results][property] :
      stateObj[state] = data[results];
    this.setState(stateObj);
    console.log(stateObj, state)
  })
}

setLoadAndCatch = (fetchUrl) => {
  console.log("TYPE", this.state.type)
  fetchUrl.then(() => this.setState({isLoading: false}))
  .catch(error => this.setState({error, isLoading: false}))
}

goHome = (fetchUrl, state, results, property) => {
  this.setLoadAndCatch(this.fetchURL(fetchUrl, state, results, property));
}

handleGenreUpdate = (genreTxt) => {
  this.setState({type: 'genre'}, () => console.log("STATE", this.state.type))
  this.setState({genreTxt: genreTxt, type: 'genre', isLoading: true, searchTxt: ""});
  this.fetchURL(NYT_API+GNRE_QRY+genreTxt+'.json?api-key='+NYT_API_KEY, 'genres')
  .then(() => this.setState({isLoading: false}))
  .catch(error => this.setState({error, isLoading: false}))
  };
  render() {
    let content;
    const {books,
           genres, 
           type, 
           searchTxt, 
           genreTxt, 
           isLoading, 
           booksLoaded, 
           error} = this.state;
    if (error) {return <p>{error.message}</p>}
    if (isLoading) {return <p>LOADING...</p>}
    if (this.state.type === 'overview'){
      content = <Home
                genreLst={this.state.genres}
                onGenreClick={this.handleGenreUpdate} />
    }
    if (this.state.type === 'genre'){
      content = <GenreBks    
                genre={this.state.genres}/>
    }
    return (
      <div className="App">
        {content}
      </div>
    )
  }
}

