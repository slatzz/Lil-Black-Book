import React from 'react';
import Search from './Search'
import axios from 'axios';
import FaveList from './FaveList';
import FaveListEntry from './FaveListEntry'
import QueryList from './QueryList'

export default class Layout extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            werd: '', // The word input
            query: {}, // The searched word resp obj
            favorites: [], // My favorited words
            werdData: [], // Collected word data
            rating: null
        }
        // Bind functions to app
        this.searchUrban = this.searchUrban.bind(this);
        this.searchWerd = this.searchWerd.bind(this);
        this.favoriteAWord = this.favoriteAWord.bind(this);
        this.toggleLike = this.toggleLike.bind(this);
        this.removeAWord = this.removeAWord.bind(this);
        this.onSubmit = this.onSubmit.bind(this)
        // this.onSubmit = this.onSubmit.bind(this)
    }

    componentDidMount(){
        console.log('Page mounted!')
        axios.get('/dictionary')
            .then( ({ results }) => this.setState({ werdData: results })) 
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
                // console.log('DATAAAAAA', data);
            // console.log(typeof data.list[0]) // object
            //   console.log(data.list[0])
              this.setState({
                  query: data.list[0]
              })
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

    onSubmit(event){
        this.setState({
            favorites: []
        })
    }

    favoriteAWord(){
        event.preventDefault();
        let { query, favorites, werdData } = this.state;
        axios.post('http://localhost:8080/dictionary', query)
            .then( (searchedWord) => {
                console.log('hello from favoriteAWord')
                axios.get('http://localhost:8080/dictionary')
                    .then( (results) => {
                        if(favorites.length === 0){
                            this.setState({
                                favorites: [query],
                                werdData: results.data
                            })
                        } else {
                            if(!favorites.includes(query)){
                                favorites.push(query)
                                this.setState({
                                    werdData: results.data
                                })
                            } else {
                                console.log('ALREADY FAVORITED')
                            }
                        }
                    })
            })
            .catch( err => { console.log('something went wrong', err)})
        }

    removeAWord(favedWord){
        console.log('----->', favedWord)
            // axios.delete(`http://localhost:8080/dictionary?favedWord=${favedWord}`)
            //     .then( () => {
            //         axios.get('http://localhost:8080/dictionary')
            //         .then( result => {
            //             this.setState({ 
            //                 werdData: result.data,
            //             })
            //             res.send('Word removed with function!')
            //         })
            //     })
            //     .catch( err => { console.log('item removed!')})
            }

    toggleLike(userRating){ // Clicking like will set rating to 1, clicking dislike will set rating to -1
        let { rating, werdData } = this.state;
        const options = {
            rating: rating 
        }
        axios.put('http://localhost:8080/dictionary/rating', options)
            .then(() => {
                axios.get('http://localhost:8080/dictionary')
                .then( result => {
                    this.setState({
                    rating: rating,
                    werdData: result.data
                           })
                        })
                    })
                }

    render(){
       let { favorites, query } = this.state;
    //    console.log('-------->', query);
       if(Object.keys(query).length ){
           return (
               <div>
                   <h1><center>Lil Black Book.</center></h1>
                   <h3><center>Look up the strange word your nephew used at Thanksgiving to describe your feet.</center></h3>
                   <p></p>
                   <h4>Enter a word below:</h4>
                   <div><Search searchUrban={this.searchUrban} searchWerd={this.searchWerd} /></div>
                   <br></br>
                   <div><QueryList entry={query} favoriteAWord={this.favoriteAWord} toggleLike={this.toggleLike}/></div>
                   <div><FaveList faves={favorites}/></div>
                   <div><FaveListEntry entry={query} removeAWord={this.removeAWord}/></div>
               </div>
           )
       } 
       else{
        return (
            <div>
                <h1><center>Lil Black Book.</center></h1>
                <h3><center>Educate yourself before you yeet yourself.</center></h3>
                <p></p>
                <h4>Enter a word below:</h4>
                <div><Search searchUrban={this.searchUrban} searchWerd={this.searchWerd} /></div>
                <br></br>
                <div><QueryList entry={query} favoriteAWord={this.favoriteAWord} toggleLike={this.toggleLike}/></div>
                <div><FaveList faves={favorites}/></div>
                {/* <div><FaveListEntry entry={query} onSubmit={this.onSubmit} removeAWord={this.removeAWord}/> */}
                </div>
                

            
        )
       } 
    //    else { // Page display before any search or favorite
    //     return (
    //         <div>
    //                <h1><center>Lil Black Book.</center></h1>
    //                <h3><center>Look up the strange word your nephew used at Thanksgiving to describe your feet.</center></h3>
    //             <p></p>
    //             <h4>Enter a word below:</h4>
    //             <div><Search searchUrban={this.searchUrban} searchWerd={this.searchWerd} entry={query}/></div>
    //             <div><FaveList faves={favorites}/></div>
    //         </div>
    //         )
    //    }
    }
}