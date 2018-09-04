import React from 'react';
import Header from './components/Header';
import { isArray } from 'util';
import SearchResults from './components/SearchResults';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      company: [],
      product: [],
      currentOrder: {}
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClickAdd = this.handleClickAdd.bind(this);
    this.handleClickMinus = this.handleClickMinus.bind(this);
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
    console.log(this.state.currentOrder)
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

  handleClickAdd(event) {
    const productname = event.target.name;
    const quantity = this.state.currentOrder[productname] ? this.state.currentOrder[productname] : 0;
    const newOrder = { [productname]: quantity + 1 };
    const updatedOrder = Object.assign({}, this.state.currentOrder, newOrder);
    this.setState({
      currentOrder: updatedOrder
    })
    console.log(this.state.currentOrder)
  }

  handleClickMinus(event) {
    const productname = event.target.name;
    const quantity = this.state.currentOrder[productname];
    if (this.state.currentOrder[productname] > 1) {
      const newOrder = { [productname]: quantity - 1 };
      const updatedOrder = Object.assign({}, this.state.currentOrder, newOrder);
      this.setState({ currentOrder: updatedOrder })
    } else if ((this.state.currentOrder[productname] = 1)) {
      const updatedOrder = Object.assign({}, this.state.currentOrder);
      delete updatedOrder[productname];
      this.setState({ currentOrder: updatedOrder })
    }

  }
  render() {
    console.log(this.state.currentOrder);
    return (
      <div>
        <Header title="Company price list" />
        <label>Company</label>
        <select defaultValue="Select Company here" onChange={this.handleChange}>
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
        <SearchResults onClick={this.handleClickAdd} result={this.state.product} onClickMinus={this.handleClickMinus} />

        <div>
          Shopping Basket:

          {this.state.currentOrder ? Object.keys(this.state.currentOrder).map(item => {
            const itemQuantity = this.state.currentOrder[item];
            const itemName = item;
            return (<div key={itemName}>  <p>{item} quantity:{itemQuantity}</p>
            </div>)
          }) : ""}

          <button>Submit Order</button>
        </div>

      </div>
    );
  }
}

export default App;
