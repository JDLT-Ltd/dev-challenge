/* global api, describe, it, expect*/

describe('GET /', () => {

  it('should return a 200 response', done => {
    api.get('/api/samples')
      .query({ supplier: 'New Co Ltd', product: 'Super wongle' })
      .end((err, res) => {
        expect(res.status).to.eq(200)
        done()
      })
  })

  it('should return a 404 response', done => {
    api.get('/api/samples')
      .query({ supplier: 'New Co Ltd', product: 'Mini wongle' })
      .end((err, res) => {
        expect(res.status).to.eq(404)
        done()
      })
  })

  it('should return an object', done => {
    api.get('/')
      .query({ supplier: 'New Co Ltd', product: 'Super wongle' })
      .end((err, res) => {
        expect(res.body).to.be.an('object')
        done()
      })
  })

  it('should return the correct fields', done => {
    api.get('/api/samples')
      .query({ supplier: 'New Co Ltd', product: 'Super wongle' })
      .end((err, res) => {
        expect(res.body).to.contain.keys([
          '_id',
          'supplier',
          'product',
          'price'
        ])
      })
    done()
  })


  it('should all use the correct data types', done => {
    api.get('/api/samples')
      .query({ supplier: 'New Co Ltd', product: 'Super wongle' })
      .end((err,res) => {
        expect(res.body._id).to.be.a('string'),
        expect(res.body.supplier).to.be.a('string'),
        expect(res.body.product).to.be.a('string'),
        expect(res.body.price).to.be.a('number'),
        done()
      })
  })


})
