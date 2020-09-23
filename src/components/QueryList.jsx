import React from 'react'

const QueryList = (props) => (
    <div className='queried-word'>
        <span className='queried-word'><b>Werddd:   </b>{props.entry.word}</span><br></br>
        <span className='queried-word-definition'><b>Definition:   </b>{props.entry.definition}</span><br></br>
        <span className='queried-word-example'><b>Example:   </b>{props.entry.example}</span><br></br>
        <span className='queried-word-thumbs-up'><b>Likes:   </b>{props.entry.thumbs_up}</span><br></br>
        <span className='queried-word-thumbs-down'><b>Dislikes:   </b>{props.entry.thumbs_down}</span>
            <br></br><br></br>
            <button onClick={ () => props.favoriteAWord()}>Add to Word Bank</button>
    </div>

)

export default QueryList;