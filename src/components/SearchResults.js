import React from 'react';

class SearchResults extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleClickMinus = this.handleClickMinus.bind(this);
  }

  handleClick(event) {
    this.props.onClick(event);

  }

  handleClickMinus(event) {
    this.props.onClickMinus(event);
  }
  render() {

    return (
      <div>
        <p>search results</p>
        <table>
          <tbody>
            <tr>
              <th>Company</th>
              <th>Product</th>
              <th>Price</th>
              <th>Description</th>
              <th>Buy</th>
            </tr>
            {this.props.result
              ? this.props.result.map(data => {
                return (
                  <tr key={data.id}>
                    <td>{data.company_name}</td>
                    <td>{data.product_name}</td>
                    <td>{data.price}</td>
                    <td>{data.description}</td>
                    <td><button name={data.product_name} onClick={this.handleClick}>+</button><button name={data.product_name} onClick={this.handleClickMinus}>-</button></td>
                  </tr>
                );
              })
              : ''}
          </tbody>
        </table>
      </div>
    );
  }
}

export default SearchResults;
