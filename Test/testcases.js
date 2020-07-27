const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../index.js');
const should = chai.should();
const expect = require('chai').expect;
const dynamicSort = require('../Models/Users/Methods/sorting')

chai.use(chaiHttp);
chai.use(require("chai-sorted"));

// testcase for sorting by name function
describe('Sorting', function () {
  it('sorting by name', async () => {
    let result = [
      {
        "id": 1,
        "name": "James",
        "email": "James@123.com",
        "password": "1!23#4",
        "role": "EMPLOYEE"
      },
      {
        "id": 2,
        "name": "Peter",
        "email": "Peter@123.com",
        "password": "8^23!3",
        "role": "EMPLOYEE"
      },
      {
        "id": 3,
        "name": "John",
        "email": "John@123.com",
        "password": "98!891",
        "role": "ADMIN"
      },
      {
        "id": 4,
        "name": "Fred",
        "email": "Fred@123.com",
        "password": "68651",
        "role": "ADMIN"
      }
    ]
    const sort_key = "name";
    result.sort(dynamicSort(sort_key))
    expect(result).to.be.sortedBy("name")
  });
})
// testcase for get all user from user table
describe('get all users from Users', function () {
  it('/GET from users', function (done) {
    chai.request(server)
      .get('/v1/Users')
      .end(function (err, res) {
        should.not.exist(err);
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.type.should.eql('application/json');
        done();
      });
  });
})
// testcase for get user details by id in user table
describe('get user details by id ', function () {
  it('/GET from users', function (done) {
    chai.request(server)
      .get('/v1/Users/2')
      .end(function (err, res) {
        should.not.exist(err);
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('object');
        res.type.should.eql('application/json');
        res.body.success.should.eql(true);
        done();
      });
  });
})
//testcase for get user details by username and password in user table
describe('get user details by username and password ', function () {
  it('/GET from users', function (done) {
    chai.request(server)
      .get('/v1/Users/login/James@123.com/' + encodeURIComponent('1!23#4'))
      .end(function (err, res) {
        should.not.exist(err);
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('object');
        res.type.should.eql('application/json');
        res.body.success.should.eql(true);
        done();
      });
  });
})

