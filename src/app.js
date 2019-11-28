import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Route , Switch} from 'react-router-dom'
import { ToastContainer } from 'react-toastify'


import './dashboard.scss'

import Dashboard from './components/Dashboard'


class App extends React.Component {


  render() {
    return (
      <HashRouter>
        <ToastContainer position="top-center" hideProgressBar={true}/>
        <Switch>
          <Route path="/" component={Dashboard}/>
        </Switch>
      </HashRouter>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
