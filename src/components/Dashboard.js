import React from 'react'
import Details from './Details'
import axios from 'axios'
import 'react-toastify/dist/ReactToastify.css'
import { toast } from 'react-toastify'

class Dashboard extends React.Component {

  constructor() {
    super()
    this.state = {
      formData: {
        supplier: '',
        product: ''
      },
      sample: {}
    }
    this.handleSupplierDropdown = this.handleSupplierDropdown.bind(this)
    this.handleProductDropdown = this.handleProductDropdown.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    console.log('mounting')
  }

  handleSupplierDropdown(e) {
    const formData = { ...this.state.formData, [e.target.name]: e.target.value }
    this.setState({ formData})
  }

  handleProductDropdown(e) {
    const formData = { ...this.state.formData, [e.target.name]: e.target.value }
    this.setState({ formData})
  }

  handleSubmit(e) {
    e.preventDefault()

    axios.get('api/samples', {
      params: {
        supplier: this.state.formData.supplier,
        product: this.state.formData.product
      }
    })
      .then(res => this.setState({ sample: res.data}))
      .catch(() => toast.error('This supplier does not have this product available'))
  }


  render() {
    console.log(this.state.formData)
    return(
      <div className="section">
        <div className="container">
          <h2 className="pricing title">Product pricing</h2>
          <form onSubmit={this.handleSubmit}>

            <div className="row">
              <div className="dropdown">
                <label className="subtitle">Supplier</label>
                <div className="select is-rounded is-primary">
                  <select
                    className="supplierchoice"
                    name="supplier"
                    onChange={this.handleSupplierDropdown}>
                    <option>Select dropdown</option>
                    <option value="New Co Ltd">New Co Ltd</option>
                    <option value="Old Co Ltd">Old Co Ltd</option>
                  </select>
                </div>
              </div>

              <div className="row">
                <div className="dropdown">
                  <label className="subtitle">Product</label>
                  <div className="select is-rounded is-primary">
                    <select
                      name="product"
                      className="productchoice"
                      onChange={this.handleProductDropdown}>
                      <option>Select dropdown</option>
                      <option value="Small wongle">Small wongle</option>
                      <option value="Large wongle">Large wongle</option>
                      <option value="Mini wongle">Mini wongle</option>
                      <option value="Super wongle">Super wongle</option>
                    </select>
                  </div>
                </div>
              </div>

            </div>
            <button className="button submitbtn">Submit</button>
          </form>
        </div>

        <Details
          sample={this.state.sample}
        />

      </div>
    )
  }
}

export default Dashboard
