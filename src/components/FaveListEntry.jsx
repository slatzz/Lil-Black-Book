import React from 'react'

const FaveListEntry = ( { entry, removeAWord} ) => (
    <div className='favorited-list-entries' favorited-word={ entry } removeAWord={removeAWord}>
        <span className='fave-word'> <b>Werddd:   </b> {entry.word}</span><br></br>
        <span className='fave-word-definition'><b>Definition:   </b> {entry.definition}</span><br></br>
        <span className='fave-word-example'><b>Example:   </b> {entry.example}</span><br></br>
        <span className='fave-word-thumbs-up'><b>Likes:   </b> {entry.thumbs_up}</span>
        <br></br>
        <span className='fave-word-thumbs-down'><b>Dislikes:   </b> {entry.thumbs_down}</span>
        <br></br>
        <div><button onClick={ () => { removeAWord() }}>Remove</button></div>

        <p></p>
    </div>
)

export default FaveListEntry;