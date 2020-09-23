import React from 'react'
import FaveListEntry from './FaveListEntry'

const Favorites = (props) => (
  <div>
    <div className='favorited-words'></div>
      <h3>My Word Bank</h3>
      { props.faves.map( (faved, index) => <FaveListEntry entry={ faved } key={ index } /> )}
  </div>
)
export default Favorites;