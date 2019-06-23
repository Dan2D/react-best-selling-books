import React, { Component } from 'react'
import Nav from "./components/Nav";
import Content from "./components/Content";
import API_CALLS from "./components/Utils/APICalls";
import "./App.css";

const {NYT_API_KEY,
        NYT_API,
        OVRVW_QRY,
        GNRE_QRY, 
        GNRE_LST_QRY} = API_CALLS['NYT'];
const {GR_KEY, 
       GR_API,
       GR_GNRL_QRY, 
       GR_QRY } = API_CALLS['GR'];

const CORS = 'https://cors-anywhere.herokuapp.com/';

export default class App extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      date: new Date(),
      dateMin: new Date('2008-06-08'),
      dateMax: new Date(),
      navGenres: [],
      books: [],
      genres: [],
      content: 'home',
      searchTxt: '',
      searchTyp: '',
      genreTxt: '',
      isLoading: false,
      error: null,
    }
  }
  componentDidMount() {
    let navGenres = this.fetchJSON(NYT_API+GNRE_LST_QRY+'&api-key='+NYT_API_KEY, 'navGenres');
    let homeContent = this.fetchJSON(NYT_API+OVRVW_QRY+'api-key='+NYT_API_KEY, 'genres', 'lists');
    this.setState({content: 'home'});
    Promise.all([navGenres, homeContent]);
  }

  fetchXML = (input, state) => {
    let stateObj = {};
    this.setState({isLoading: true});
    return fetch(input)
    .then(response => {
      if (response.ok)
        {return response.text()}
      else 
        {throw new Error('Bad Response')}
    })
    .then(str => (new window.DOMParser()).parseFromString(str, "text/xml"))
    .then(data => {
        if (state === undefined) 
          {return data}
        else
          {stateObj[state] = data;
            stateObj['isLoading'] = false;
            this.setState(stateObj);}
      })
    }

  fetchJSON = (input, state, property, results='results') => {
      let stateObj = {};
      this.setState({isLoading: true});
      return fetch(input)
      .then(response => {
        if(response.ok)
          {return response.json()}
        else
          {throw new Error('Something went wrong...')}
        })
      .then(data => {
        stateObj[state] = property != null ? 
          data[results][property] :
          stateObj[state] = data[results];
        stateObj['isLoading'] = false;
        this.setState(stateObj)
        })
          .catch(error => this.setState({error, isLoading: false}))
    }

  goHome = () => {
    this.setState({content: 'home',
                   searchTxt: "", 
                   searchTyp: 'Title', 
                   date: new Date(), 
                   dateMin: new Date('2008-06-08'), 
                   dateMax: new Date()});
    this.fetchJSON(NYT_API+OVRVW_QRY+'current/&api-key='+NYT_API_KEY, 'genres', 'lists')
    }
  
  handleSelectUpdate = (srchTyp) => {
      this.setState({searchTyp: srchTyp})
  }

  handleSearch = (searchTxt, searchTyp, pg=1) => {
    this.setState({searchTxt: searchTxt, content: 'search', searchTyp: searchTyp});
    searchTxt = searchTxt.replace(/\s/g, "+").toLowerCase();
    searchTxt = searchTxt.replace(/'/g, "%27s");
    if (searchTyp === 'title')
      {this.fetchXML(CORS+GR_API+GR_GNRL_QRY+GR_KEY+'&search[field]=title&q='+searchTxt+'&page='+pg, 'books')}
    else 
      {this.fetchXML(CORS+GR_API+'api/author_url/'+searchTxt+'?key='+GR_KEY)
       .then(data => {
            if (data.querySelector('author') === null) 
              {return this.setState({books: data})}
            else 
              {return data.querySelector('author').getAttribute('id')}}
            )
        .then(id => {return this.fetchXML(CORS+GR_API+GR_QRY+id+'?format=xml&key='+GR_KEY+'&page='+pg, 'books')})
      }
  }

  handleSearchTxtUpdate = (text) => {
      this.setState({searchTxt: text});
    };

  handleDateUpdate = (date) => {
      if (this.state.content === 'home')
        {this.setState({searchTxt: "", date: new Date(date)});
        this.fetchJSON(NYT_API+OVRVW_QRY+'published_date='+date+'&api-key='+NYT_API_KEY, 'genres', 'lists')}
      else  
        {this.setState({genreTxt: this.state.genreTxt, 
                        searchTxt: "", 
                        date: new Date(date)});
        this.fetchJSON(NYT_API+GNRE_QRY+date+'/'+this.state.genreTxt+'.json?api-key='+NYT_API_KEY, 'genres')
        }
    }

  handleGenreUpdate = (genreTxt, dateMin, dateMax) => {
    this.setState({genreTxt: genreTxt, 
                   content: 'genre', 
                   searchTxt: "", 
                   dateMin: new Date(dateMin), 
                   dateMax: new Date(dateMax), 
                   date: new Date(dateMax)});
    this.fetchJSON(NYT_API+GNRE_QRY+'current/'+genreTxt+'.json?api-key='+NYT_API_KEY, 'genres')
  };

  render() {
    const {date, 
           dateMin,
           dateMax,
           navGenres,
           books,
           genres,
           genreTxt,
           content,
           searchTxt,
           searchTyp, 
           isLoading, 
           error} = this.state;
    if (error) 
      {return <p>{error.message}</p>}
    return (
      <div className="App">
      <Nav
        onHomeClick={this.goHome}
        onSelectUpdate={this.handleSelectUpdate}
        onSearchUpdate={(text) => {this.setState({searchTxt: text})}}
        onSearchSubmit={this.handleSearch}
        onGenreClick={this.handleGenreUpdate}
        onDateChange={this.handleDateUpdate}
        content={content}
        searchTyp={searchTyp}
        searchTxt={searchTxt}
        genreTxt={genreTxt}
        navGenres={navGenres}
        date={date}
        dateMin={dateMin}
        dateMax={dateMax}/>
      <Content
        onTtlClick={(book) => {this.setState({books: book, content: 'book'})}}
        onAuthClick={this.handleSearch}
        onGenreClick={this.handleGenreUpdate}
        onPgClick={this.handleSearch}
        content={content}
        srchTyp={searchTyp}
        books={books}
        isLoading={isLoading}
        dateMin={dateMin}
        dateMax={dateMax}
        genres={genres}/>
      </div>
    )
  }
}
