import React from 'react'

const FaveListEntry = ( { entry }) => (
    <div className='favorited-list-entries' favorited-word={ entry }>
        <span className='fave-word'> Werddd: {entry.word}</span>
        <span className='fave-word-definition'>Definition: {entry.definition}</span>
        <span className='fave-word-example'>Example: {entry.example}</span>
        <span className='fave-word-thumbs-up'>Likes: {entry.thumbs_up}</span>
        <span className='fave-word-thumbs-down'>Dislikes: {entry.thumbs_down}</span>
    </div>
)

export default FaveListEntry;