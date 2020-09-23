import React from 'react'
// import { in } from 'sequelize/types/lib/operators'

export default class Zipcode extends React.Component {

    render() {
      return (
        <form method="POST">
        <label>
          Zipcode:
          <input type="text" name="name" />
        </label>
        <input type="submit" value="Search" />
      </form>
      );
    }
  }
  // window.Zipcode = Zipcode;