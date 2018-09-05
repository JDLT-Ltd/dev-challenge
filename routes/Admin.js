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
        <button>
          <Link to="/">Home</Link>
        </button>
        {this.state.display.map((item, index) => {
          return (
            <p key={index}>
              {index + 1}
              {JSON.stringify(item)}
            </p>
          );
        })}
      </div>
    );
  }
}

export default Admin;
