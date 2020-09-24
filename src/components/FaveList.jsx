import React from 'react'
import FaveListEntry from './FaveListEntry'

const Favorites = (props) => (
   <div>
    <div className='favorited-words'></div>
      <h3>My Word Bank</h3>
      <div>
        
        { props.faves.map( (faved, index) =>  <FaveListEntry entry={ faved } key={ index } removeAWord={ props.removeAWord }/> )}</div>
      <br></br>
  </div>
)
export default Favorites;