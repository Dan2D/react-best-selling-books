import React, {Component} from 'react'
import StarRating from "react-rating";
import API_CALLS from "../../Utils/APICalls";


const {GR_KEY, GR_API, GR_RVW_QRY, GR_ISBN_QRY, GR_RTNG_QRY} = API_CALLS['GR']

class BookSubInfo extends Component{
    constructor(props) {
        super(props)
        this.state = {
             rating: 0,
        }
    }

    componentDidMount(){
        let isbn = this.props.isbns.isbn13;
        fetch('https://cors-anywhere.herokuapp.com/'+GR_API+GR_RVW_QRY+isbn+'&key='+GR_KEY)
        .then(response => response.json())
        .then(data => this.setState({rating: data.books[0].average_rating}))
    }

    render(){
        return (
            <div className="book-review-info">
                <a className="book-buy-link" 
                href={this.props.buyLnk.url}
                target="blank">
                Buy this Book
                </a>
                <div>{this.state.rating === 0 ? 'No Rating Available' : 
                <div>
                <StarRating
                initialRating={this.state.rating}
                emptySymbol="far fa-star fa-lg"
                fullSymbol="fas fa-star fa-lg"
                fractions={2}
                readonly /> {this.state.rating}</div>}</div>
                <p className='book-description'>Description...</p>
                <div>{this.props.dscrpt === "" ? 'No Description Available...' : this.props.dscrpt}</div>
        </div>
        )
    }
}

export default BookSubInfo
