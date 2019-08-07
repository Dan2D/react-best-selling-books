import React from 'react';
import {Link} from 'react-router-dom';
import {getSearchAuth} from '../../../store/actions/pageActions';
import {connect} from 'react-redux';

function AuthorArray(props) {
        let authorTxt = props.authors.split(/,|\sand\s|\swith\s/);
        let authorArr =  authorTxt.map((author, indx) => {
        let comma = "";
          if (indx < authorTxt.length - 1) {
            comma = ",";
          }
          return (
            <span key={author}>
              <Link to={`/search/${author.replace(" ", "+")}`}
                className="author-btn"
                onClick={() => props.dispatch(getSearchAuth(author))}
              >
                {author + comma}
              </Link>
            </span>
          );
        });
    return <>{authorArr}</>
}

export default connect(null)(AuthorArray)


