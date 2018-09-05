import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../src/components/Header';

class Admin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      display: []
    };
  }

  componentDidMount() {
    fetch('/orders')
      .then(res => res.json())
      .then(data => this.setState({ display: data }))
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div>
        <Header title="Admin Page" />

        <div className="button_div">
          <button className="button_route">
            <Link to="/">Home </Link>
          </button>
        </div>

        {this.state.display.map((item, index) => {
          return (
            <div className="orders" key={index}>
              Order# {index + 1}
              <br />
              {JSON.stringify(item)}
            </div>
          );
        })}
      </div>
    );
  }
}

export default Admin;
