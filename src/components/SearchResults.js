import React from 'react';

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props.result);
    return (
      <div>
        <p>search results</p>
        <table>
          <tbody>
            <tr>
              <th>Company</th>
              <th>Product</th>
              <th>Price</th>
            </tr>
            {this.props.result
              ? this.props.result.map(data => {
                  return (
                    <tr key={data.id}>
                      <td>{data.company_name}</td>
                      <td>{data.product_name}</td>
                      <td>{data.price}</td>
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
