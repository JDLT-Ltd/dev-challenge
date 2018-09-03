import React from 'react';

import { isArray } from 'util';

class Selector extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <label>Company</label>

        <select defaultValue="Select Here">
          <option disabled>Select Company here</option>
          {isArray(this.props.company)
            ? this.props.company.map(option => (
              <option key={option}> {option} </option>
            ))
            : ''}
        </select>
        <br />
        <label>Product</label>
        <select>
          {isArray(this.props.product)
            ? this.props.product.map(option => (
              <option key={option}> {option} </option>
            ))
            : ''}
        </select>
      </div>
    );
  }
}

export default Selector;
