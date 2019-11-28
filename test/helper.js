process.env.NODE_ENV = 'test' //set the app to the test node

const chai = require('chai')
global.expect = chai.expect //make chai's expect functions globally available

const supertest = require('supertest')
const app = require('../index')
global.api = supertest(app) // create a testable API from our app
