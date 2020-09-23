import React from 'react'

const FaveListEntry = ( { entry, toggleLike }) => (
    <div className='favorited-list-entries' favorited-word={ entry }>
        <span className='fave-word'> <b>Werddd:   </b> {entry.word}</span><br></br>
        <span className='fave-word-definition'><b>Definition:   </b> {entry.definition}</span><br></br>
        <span className='fave-word-example'><b>Example:   </b> {entry.example}</span><br></br>

        <span className='fave-word-thumbs-up'><b>Likes:   </b> {entry.thumbs_up}</span>
        <div><button onClick={() => { toggleLike(entry.thumbs_up, 1) }}>Like</button></div>

        <br></br>
        <span className='fave-word-thumbs-down'><b>Dislikes:   </b> {entry.thumbs_down}</span>
        <div><button onClick={() => { toggleLike(entry.thumbs_down, -1) }}>Dislike</button></div>
        <br></br>
        <p></p>
    </div>
)

export default FaveListEntry;