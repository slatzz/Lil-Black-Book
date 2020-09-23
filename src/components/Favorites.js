import React from 'react'

export default class Favorites extends React.Component {
  render() {
    return (
      <div className="favorite-businesses">
        <nav><h4>Spooky Spotlight</h4></nav>
        <h5>Top professionals rated by your neighbors!</h5>
        <ul>
          <li>Business 1</li>
          <li>Business 2</li>
          <li>Business 3</li>
        </ul>
      </div>
    );
  }
}
// export { Favorites }

// function Favorites(props) {
//   <div className="favorite-businesses">
//           <h1>Spooky Spotlight</h1>
//           <ul>
//             <li>Business 1</li>
//             <li>Business 2</li>
//             <li>Business 3</li>
//           </ul>
//   </div>

// }

// window.Favorites = Favorites;