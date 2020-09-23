import React from 'react';

const Search = ( { searchUrban, searchWerd }) => (
  <div>
  <div><input method="POST" type="text" onChange={(event) => { searchWerd(event) }}/></div>
  <div><button onClick={() => { searchUrban() }}>Submit</button></div>
  </div>
)

export default Search;