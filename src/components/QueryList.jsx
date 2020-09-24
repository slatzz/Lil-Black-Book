import React from 'react'

const QueryList = (props) => (
    <div className='queried-word'>
        <span className='queried-word'><b>Werddd:   </b>{props.entry.word}</span><br></br>
        <span className='queried-word-definition'><b>Definition:   </b>{props.entry.definition}</span><br></br>
        <span className='queried-word-example'><b>Example:   </b>{props.entry.example}</span><br></br>
        <span className='queried-word-thumbs-up'><b>Likes:   </b>{props.entry.thumbs_up}</span>
        <button id="like" onClick={() => {props.toggleLike(props.entry.thumbs_up = props.entry.thumbs_up + 1)}}>Like</button>
        <br></br>
        <span className='queried-word-thumbs-down'><b>Dislikes:   </b>{props.entry.thumbs_down}</span>
            <button id="dislike" onClick={() => {props.toggleLike(props.entry.thumbs_down = props.entry.thumbs_down + 1)}}>Dislike</button>
            <br></br><br></br>  

        <span className='favoriteBtn'>
            <button id="favoriteBtn" onClick={() => props.favoriteAWord()}>Add to Word Bank</button>
        </span>
</div>
)

export default QueryList;