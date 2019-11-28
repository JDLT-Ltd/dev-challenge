const Sample = require('../models/Sample')

function indexRoute(req, res) {
  Sample
    .findOne({supplier: req.query.supplier, product: req.query.product})
    .then(sample => {
      if(!sample) {
        return res.sendStatus(404)
      } else return res.json(sample)
    })

}


module.exports = {
  index: indexRoute
}
