import React from 'react';
import Search from './Search'
// import Favorites from './Favorites'
import axios from 'axios';
// import axios from 'axios';


export default class Layout extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            werd: '',
            favorites: [],
            searchedTerm: {}
        }
        // Bind functions to app
        this.searchUrban = this.searchUrban.bind(this);
        this.searchWerd = this.searchWerd.bind(this);
        // this.onSubmit = this.onSubmit.bind(this)
    }

    componentDidMount(){
        console.log('Page mounted!')
        axios.get('http://localhost:8080/dictionary')
            .then( faves => this.setState({favorites: faves.data})) 
    }

    // Call API when word is entered
    searchUrban(){
        let { werd } = this.state;
        axios({
            "method": "GET",
            "url":"https://mashape-community-urban-dictionary.p.rapidapi.com/define",
            "headers":{
            "content-type":"application/octet-stream",
            "x-rapidapi-host":"mashape-community-urban-dictionary.p.rapidapi.com",
            "x-rapidapi-key":"455ffbb674msh420f5e0a44efc1bp1d98f8jsn42e6262181ad",
            "useQueryString":true
            },"params":{
            "term": `${werd}`
            }
            })
            .then(({data})=>{
              console.log(data.list[0])
              this.setState = {
                  searchedTerm: data.list[0]
              }
            })
            .catch((error)=>{
              console.log(error)
            })
        console.log('searchUrban!')
    }

    // Updates werd to queried word
    searchWerd(event){
        console.log('ETV', event.target.value)
        this.setState({ werd: event.target.value })
    }

    render(){
        return (
            <div>
                <h1>Lil Black Book.</h1>
                <h3>Look up the strange word your nephew used at Thanksgiving to describe your feet.</h3>
                <p></p>
                <h4>Enter a word below:</h4>
                <div><Search searchUrban={this.searchUrban} searchWerd={this.searchWerd}/></div>
            </div>
        )
    }
}