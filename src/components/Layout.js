import React from 'react';
import Zipcode from './Zipcodes'
import Favorites from './Favorites'

export default class Layout extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div>
                <h1>Welcome to Spooky!</h1>
                <h3>Find metaphysical and paranormal professionals in your area.</h3>
                <p></p>
                <h4>Enter your zipcode to search professionals:</h4>
                <div><Zipcode /></div>
                <div><Favorites /></div>
            </div>
        )
    }
}