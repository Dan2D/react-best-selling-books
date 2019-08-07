import {
  UPDATE_CONTENT_DATE,
  GET_HOME_CONTENT,
  GET_NEW_GENRE,
  SEARCH_TITLE,
  SEARCH_AUTH,
  DETAIL_BK_VIEW,
  NO_DATA,
  IS_LOADING
} from "../actions/types";

let initialState = {
  content: "home",
  genreTxt: "",
  genres: {},
  books: {
    bookArr: [],
    cover: ""
  }
};

const pageReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_HOME_CONTENT:
      return {
        ...state,
        content: 'home',
        genres: action.payload
      };
    case GET_NEW_GENRE:
      return {
        ...state,
        genres: action.payload,
        content: "genre",
        genreTxt: action.genreTxt
      };
      case DETAIL_BK_VIEW:
          return {
              ...state,
              content: 'detail',
              books: {
                  ...state.books,
                  bookArr: action.bookInfo,
                  cover: action.cover
              }
          }
    case UPDATE_CONTENT_DATE:
      return { ...state, genres: action.payload };
    case SEARCH_TITLE:
      return {
        ...state,
        content: "search",
        books: {
          ...state.books,
          bookArr: action.bookArr,
          results: action.totalResults,
          pg: action.pg
        }
      };
    case SEARCH_AUTH:
      return {
        ...state,
        content: "search",
        books: {
          ...state.books,
          bookArr: action.bookArr,
          results: 1,
          pg: 1,
          author: action.authorInfo
        }
      };
      case NO_DATA:
        return {
          ...state,
          content: "search",
          books: {
            ...state.books,
            bookArr: [],
            results: 0
          }
        }
    case IS_LOADING:
      return {
        ...state,
        isLoading: action.payload
      }
    default:
      return state;
  }
};

export default pageReducer;
