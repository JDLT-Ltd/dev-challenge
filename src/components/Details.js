import React from 'react'

const Details = ({sample}) => {
  return (
    <div className="section">
      <div className="container">
        <h2 className="product title">Product details</h2>
        <div className="table-responsive">
          <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
            <thead>
              <tr>
                <th>Supplier</th>
                <th>Product</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="supplierentry">{sample.supplier}</td>
                <td className="productentry">{sample.product}</td>
                <td className="priceentry">{sample.price}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}


export default Details
