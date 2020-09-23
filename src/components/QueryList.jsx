import React from 'react'

const QueryList = (props) => (
    <div className='queried-word'>
        <span className='queried-word'> Werddd: {props.entry.word}</span>
        <span className='queried-word-definition'>Definition: {props.entry.definition}</span>
        <span className='queried-word-example'>Example: {props.entry.example}</span>
        <span className='queried-word-thumbs-up'>Likes: {props.entry.thumbs_up}</span>
        <span className='queried-word-thumbs-down'>Dislikes: {props.entry.thumbs_down}</span>
            <button onClick={ () => props.favoriteAWord()}>Favorite A Word</button>
    </div>

)

export default QueryList;