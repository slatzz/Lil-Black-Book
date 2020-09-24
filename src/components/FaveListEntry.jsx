import React from 'react'

const FaveListEntry = ( { entry, removeAWord, query } ) => (
    <div className='favorited-list-entries' favorited-word={ entry }>
        <span className='fave-word'> <b>Werddd:   </b> {entry.word}</span><br></br>
        <span className='fave-word-definition'><b>Definition:   </b> {entry.definition}</span><br></br>
        <span className='fave-word-example'><b>Example:   </b> {entry.example}</span><br></br>
        <span className='fave-word-thumbs-up'><b>Likes:   </b> {entry.thumbs_up}</span>
        <br></br>
        <span className='fave-word-thumbs-down'><b>Dislikes:   </b> {entry.thumbs_down}</span>
        <span><button onClick={() => {{removeAWord()}}} >Remove</button></span>
        <br></br>
        <p></p>
    </div>
)

export default FaveListEntry;