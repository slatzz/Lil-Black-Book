import React from 'react';
import Search from './Search'
// import Favorites from './Favorites'
import axios from 'axios';
import FaveList from './FaveList';
import FaveListEntry from './FaveListEntry'
import QueryList from './QueryList'
// import axios from 'axios';


export default class Layout extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            werd: '', // The word input
            query: {}, // The searched word resp obj
            favorites: [], // My favorited words
            werdData: [] // Collected word data
        }
        // Bind functions to app
        this.searchUrban = this.searchUrban.bind(this);
        this.searchWerd = this.searchWerd.bind(this);
        this.favoriteAWord = this.favoriteAWord.bind(this);
        // this.onSubmit = this.onSubmit.bind(this)
    }

    componentDidMount(){
        console.log('Page mounted!')
        axios.get('http://localhost:8080/dictionary')
            .then( results => this.setState({werdData: results.data})) 
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
                  query: data.list[0]
              }
            })
            .catch((error)=>{
              console.log(error)
            })
        console.log('Word has been searched!!')
    }

    // Updates werd to queried word
    searchWerd(event){
        // console.log('ETV', event.target.value)
        this.setState({ werd: event.target.value })
    }

    favoriteAWord(){
        let { query } = this.state;
        axios.post('http://localhost:8080/dictionary', query)
            .then( (searchedWord) => {
                console.log('hello from favoriteAWord')
                axios.get('http://localhost:8080/dictionary')
                    .then( (results) => {
                        console.log('--->', results)
                        this.setState({
                            werdData: results.data,
                            query: {}
                        })
                    })
            })
            .catch( err => { console.log('something went wrong', err)})
        }

    render(){
       let { favorites, query } = this.state;
       if(Object.keys(query).length){
           return (
               <div>
                   <h1>Lil Black Book.</h1>
                   <h3>Look up the strange word your nephew used at Thanksgiving to describe your feet.</h3>
                   <p></p>
                   <h4>Enter a word below:</h4>
                   <div><Search searchUrban={this.searchUrban} searchWerd={this.searchWerd} /></div>
                   <div><FaveList faves={favorites}/></div>
                   <div><QueryList entry={query} favoriteAWord={this.favoriteAWord}/></div>
               </div>
           )
       } else {
        return (
            <div>
                <h1>Lil Black Book.</h1>
                <h3>Look up the strange word your nephew used at Thanksgiving to describe your feet.</h3>
                <p></p>
                <h4>Enter a word below:</h4>
                <div><Search searchUrban={this.searchUrban} searchWerd={this.searchWerd} entry={query}/></div>
                <div><FaveList faves={favorites}/></div>
            </div>
            )
       }
    }
}