import React from 'react'

export default class Zipcode extends React.Component {
    render() {
      return (
        <button className="zipcode" text="Hello">
          {/* alert('I've been clicked!); */}
        </button>
      );
    }
  }

  window.Zipcode = Zipcode;