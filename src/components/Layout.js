import React from 'react';
import Zipcode from './Zipcodes'
import Favorites from './Favorites'

export default class Layout extends React.Component {
    constructor(){
        super()

        this.name = "Spooky Is The Best App Eva"
    }
    render(){
        return (
            <div>
                <h1>Welcome to Spooky!</h1>
                <h3>Did you know... {this.name}</h3>
                <div><Favorites /></div>
                <div><Zipcode /></div>
            </div>
        )
    }
}