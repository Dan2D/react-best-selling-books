import React, { Component } from 'react'
import Home from "./components/Home";
import API_CALLS from "./components/Utils/APICalls";
import "./App.css";

const [NYT_API_KEY,
        NYT_API,
        OVRVW_QRY,
        ATHR_QRY,
        TTL_QRY, 
        GNR_QRY, 
        GNR_LST_QRY] = API_CALLS;

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       books: [],
       genres: [],
       type: 'genre',
       searchTxt: '',
       genreTxt: '',
       isLoading: false,
       error: null,
    }
  }

  componentDidMount() {
    this.setState({isLoading: true, type: "overview"})
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
  })
}

setLoadAndCatch = (fetchUrl) => {
  fetchUrl.then(() => this.setState({isLoading: false}))
  .catch(error => this.setState({error, isLoading: false}))
}

goHome = (fetchUrl, state, results, property) => {
  this.fetchURL(fetchUrl, state, results, property)
  this.setState({isLoading: false})
}

 mainContentHandler = () => {
   if (this.state.genres.length > 0){
   return this.state.type === 'overview' ?
          <Home
          genreLst={this.state.genres} /> :
          null
        }
 }


  render() {
    if (this.state.error) {return <p>{this.state.error.message}</p>}
    if (this.state.isLoading) {return <p>LOADING...</p>}
    return (
      <div className="App">
        {this.mainContentHandler()}
      </div>
    )
  }
}

