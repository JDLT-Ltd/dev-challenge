import React from 'react';
import Header from './components/Header';
import { isArray } from 'util';
import { Link } from 'react-router-dom';
import SearchResults from './components/SearchResults';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      company: [],
      product: [],
      currentOrder: {},
      address: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClickAdd = this.handleClickAdd.bind(this);
    this.handleClickMinus = this.handleClickMinus.bind(this);
    this.handleChangeAddress = this.handleChangeAddress.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  //to pull list of company list
  componentDidMount() {
    fetch('/getcompany')
      .then(res => res.json())
      .then(data => {
        this.setState({
          company: data
        });
      })
      .catch(error => console.log(error));
  }

  //to update products dropdown options
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
    const quantity = this.state.currentOrder[productname]
      ? this.state.currentOrder[productname]
      : 0;
    const newOrder = { [productname]: quantity + 1 };
    const updatedOrder = Object.assign({}, this.state.currentOrder, newOrder);
    this.setState({
      currentOrder: updatedOrder
    });
    console.log(this.state.currentOrder);
  }

  handleClickMinus(event) {
    const productname = event.target.name;
    const quantity = this.state.currentOrder[productname];
    if (this.state.currentOrder[productname] > 1) {
      const newOrder = { [productname]: quantity - 1 };
      const updatedOrder = Object.assign({}, this.state.currentOrder, newOrder);
      this.setState({ currentOrder: updatedOrder });
    } else if ((this.state.currentOrder[productname] = 1)) {
      const updatedOrder = Object.assign({}, this.state.currentOrder);
      delete updatedOrder[productname];
      this.setState({ currentOrder: updatedOrder });
    }
  }
  handleChangeAddress(event) {
    this.setState({ address: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const address = this.state.address;
    const postNewOrder = Object.assign({ address }, this.state.currentOrder);
    fetch('/neworder', {
      method: 'post',
      body: JSON.stringify(postNewOrder),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(function(data) {
        alert(JSON.stringify(data));
      })
      .catch(error => console.log(error));
  }
  render() {
    return (
      <div className="container">
        <Header title="Company price list" />
        <div className="button_div">
          <button className="button_route">
            <Link to="/orders">Admin Page </Link>
          </button>
        </div>
        <label>Company</label>
        <select
          className="custom_select"
          defaultValue="Select Company here"
          onChange={this.handleChange}
        >
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
        <select className="custom_select">
          {this.state.product.map(option => (
            <option value={option.product_name} key={option.product_name}>
              {' '}
              {option.product_name}{' '}
            </option>
          ))}
        </select>
        <SearchResults
          onClick={this.handleClickAdd}
          result={this.state.product}
          onClickMinus={this.handleClickMinus}
        />

        <div>
          Shopping Basket:
          {this.state.currentOrder
            ? Object.keys(this.state.currentOrder).map(item => {
                const itemQuantity = this.state.currentOrder[item];
                const itemName = item;
                return (
                  <div key={itemName}>
                    {' '}
                    <p>
                      {item} quantity:
                      {itemQuantity}
                    </p>
                  </div>
                );
              })
            : ''}
          <form onSubmit={this.handleSubmit}>
            <label>Address</label>
            <input
              type="text"
              value={this.state.address}
              onChange={this.handleChangeAddress}
            />
            <button>Submit Order</button>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
