import React from 'react';
import Header from './components/Header';
// import Selector from './components/Selector';
import { isArray } from 'util';
import SearchResults from './components/SearchResults';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      company: [],
      product: []
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    // this.getCompany();
    fetch('/getcompany')
      .then(res => res.json())
      .then(data => {
        this.setState({
          company: data
        });
      })
      .catch(error => console.log(error));
  }

  handleChange(event) {
    const companyname = event.target.value;
    fetch(`/getproductinfo/${companyname}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          product: data
        });
      });
  }

  render() {
    console.log(this.state.product);
    return (
      <div>
        <Header title="Company price list" />
        <label>Company</label>
        <select onChange={this.handleChange}>
          <option disabled>Select Company here</option>
          {this.state.company.map(option => (
            <option default="" key={option} value={option}>
              {' '}
              {option}{' '}
            </option>
          ))}
        </select>
        <br />
        <label>Product</label>
        <select>
          {this.state.product.map(option => (
            <option value={option.product_name} key={option.product_name}>
              {' '}
              {option.product_name}{' '}
            </option>
          ))}
        </select>
        <SearchResults result={this.state.product} />
      </div>
    );
  }
}

export default App;
