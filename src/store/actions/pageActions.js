import {
  UPDATE_CONTENT_DATE,
  GET_HOME_CONTENT,
  GET_NEW_GENRE,
  SEARCH_TITLE,
  SEARCH_AUTH,
  DETAIL_BK_VIEW,
  NO_DATA,
  IS_LOADING
} from "./types";
import API_CALLS from "../../components/Utils/APICalls";


const { NYT_API_KEY } = API_CALLS["NYT"];
const { GR_KEY } = API_CALLS["GR"];
const CORS = "https://cors-anywhere.herokuapp.com/";

export const updateHomeDate = date => {
  return function(dispatch) {
    fetchJSON(
      `${CORS}https://api.nytimes.com/svc/books/v3/lists/overview.json?published_date=${date}&api-key=${NYT_API_KEY}`
    ).then(genres => {
      dispatch({
        type: UPDATE_CONTENT_DATE,
        payload: genres.results.lists
      });
    });
  };
};

export const updateGenreDate = (date, genreTxt) => {
  return function(dispatch) {
    fetchJSON(
      `${CORS}https://api.nytimes.com/svc/books/v3/lists/${date}/${genreTxt}.json?api-key=${NYT_API_KEY}`
    ).then(genres => {
      dispatch({
        type: UPDATE_CONTENT_DATE,
        payload: genres.results
      });
    });
  };
};

export const getHomeContent = dispatch => {
  dispatch({type: IS_LOADING, payload: true});
  return fetchJSON(
    `${CORS}https://api.nytimes.com/svc/books/v3/lists/overview.json?current/&api-key=${NYT_API_KEY}`
  ).then(genres => {
    dispatch({
      type: GET_HOME_CONTENT,
      payload: genres.results.lists
    });
    dispatch({type: IS_LOADING, payload: false});
  });
};

export const genreView = (genreTxt, dateMin, dateMax) => {
  return function(dispatch) {
    dispatch({type: IS_LOADING, payload: true});
    fetchJSON(
      `${CORS}https://api.nytimes.com/svc/books/v3/lists/${genreTxt}.json?api-key=${NYT_API_KEY}`
    ).then(genres => {
      dispatch({
        type: GET_NEW_GENRE,
        payload: genres.results,
        genreTxt,
        dateMin,
        dateMax
      });
      dispatch({type: IS_LOADING, payload: false});
    });
  };
};

export const getSearchTitle = (searchTxt, pg = 1) => {
  return function(dispatch) {
    dispatch({type: IS_LOADING, payload: true});
    fetchXML(
      `${CORS}https://www.goodreads.com/search/index.xml?key=${GR_KEY}&search=title&q=${searchTxt}&page=${pg}`
    ).then(data => {
      let work = Array.from(data.querySelectorAll("work"));
      let resultStart = parseInt(
        data.querySelector("search results-start").textContent
      );
      let totalResults = parseInt(
        data.querySelector("search total-results").textContent
      );
      let bookArr = work.map((book, indx) => {
        return {
          indx: resultStart + indx,
          id: book.querySelector("best_book id").textContent,
          title: book.querySelector("best_book title").textContent,
          author: book.querySelector("best_book author name").textContent,
          coverImg: book.querySelector("best_book image_url").textContent,
          pubYr: book.querySelector("original_publication_year").textContent
        };
      });
      dispatch({
        type: SEARCH_TITLE,
        searchTxt,
        bookArr,
        totalResults,
        pg
      });
      dispatch({type: IS_LOADING, payload: false});
    });
  };
};

export const getSearchAuth = searchTxt => {
  return function(dispatch) {
    dispatch({type: IS_LOADING, payload: true});
    getAuthId(
      `${CORS}https://www.goodreads.com/api/author_url/${searchTxt}?key=${GR_KEY}`
    )
      .then(id => {

        if(id === 0){
          dispatch({
            type: NO_DATA,
          })
          return
        }
        return fetchXML(
          `${CORS}https://www.goodreads.com/author/show/${id}?format=xml&key=${GR_KEY}`
        );
      })
      .then(data => {
        let work = Array.from(data.querySelectorAll("author books book"));
        let authorInfo = {
          name: data.querySelector("author name").textContent,
          home: data.querySelector("author hometown").textContent,
          avatar: data.querySelector("author image_url").textContent,
          dscrpt: data.querySelector("author about").textContent,
          link: data.querySelector("author link").textContent
        };
        let bookArr = work.map((book, indx) => {
          return {
            id: book.querySelector("id").textContent,
            title: book.querySelector("title_without_series").textContent,
            coverImg: book.querySelector("image_url").textContent,
            pubYr: book.querySelector("publication_year").textContent
          };
        });
        dispatch({
          type: SEARCH_AUTH,
          bookArr,
          authorInfo,
          searchTxt
        });
        dispatch({type: IS_LOADING, payload: false});
      });
  };
};

export const getBkDtl = (cover, isbn) => {
  return function(dispatch){
    dispatch({type: IS_LOADING, payload: true});
    return getBookId(`${CORS}https://www.goodreads.com/book/isbn/${isbn}?key=${GR_KEY}`)
    .then(id => {
      return fetchXML(`${CORS}https://www.goodreads.com/book/show/${id}?key=${GR_KEY}`)
    })
    .then(data => {
      let author = data.querySelector("authors");
      author = author.querySelectorAll("author name");
      let authors = Array.from(author).map(author => author.textContent)
      let bookInfo = {
        title: data.querySelector("book title").textContent,
        dscrpt: data.querySelector("book description").textContent,
        author: authors,
        pubYr: data.querySelector("book original_publication_year").textContent,
        pubMt: data.querySelector("book original_publication_month").textContent,
        pubDy: data.querySelector("book original_publication_day").textContent,
        pgNum: data.querySelector("book num_pages").textContent,
        rating: data.querySelector("book average_rating").textContent,
        isbn13: data.querySelector("book isbn13").textContent,
      }
      dispatch({
        type: DETAIL_BK_VIEW,
        bookInfo,
        cover
      });
      dispatch({type: IS_LOADING, payload: false});
    });
  }
}

export const isLoading = (bool) => {
  return {
    type: IS_LOADING,
    bool
  }
}


function fetchJSON(input) {
  return fetch(input).then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Bad Response...");
    }
  });
}

function fetchXML(input) {
  return fetch(input)
    .then(response => {
      if (response.ok) {
        return response.text();
      } else {
        throw new Error("Bad Response");
      }
    })
    .then(str => new window.DOMParser().parseFromString(str, "text/xml"));
}

function getAuthId(input) {
  return fetchXML(input)
  .then(data => {
    if (data.querySelector('author') === null){
      return 0
    }
    return data.querySelector("author").getAttribute("id");
  });
}

function getBookId(input){
  return fetchXML(input)
  .then(data => {
    return data.querySelector("book id").textContent;
  });
}