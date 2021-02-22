const request = require('supertest');

describe('Loading express', function () {
  var server;
  beforeEach(function () {
    server = require('./server');
  });
  afterEach(function () {
    server.close();
  });
  it('Should 404 on /', function testSlash(done) {
  request(server)
    .get('/')
    .expect(404, done);
  });
  it('Should 404 on /stores with no zip code', function testPath(done) {
    request(server)
      .get('/stores')
      .expect(404, done);
  });
  it('Should 404 on /stores with a zip code that is not parseable', function testPath(done) {
    request(server)
      .get('/stores/notazipcode')
      .expect(404, done);
  });  
  it('Should 404 on /stores with an invalid zip code', function testPath(done) {
    request(server)
      .get('/stores/0400')
      .expect(404, done);
  });  
  it('Should 200 on /stores/:zip when zip is valid', function testPath(done) {
    request(server)
      .get('/stores/04005')
      .expect(200, done);
  });
  it('Should 200 on /stores/:zip/:radius', function testPath(done) {
    request(server)
      .get('/stores/04005/25')
      .expect(200, done);
  });  
  it('Should 200 on /stores/:zip/:radius even if radius is not valid', function testPath(done) {
    request(server)
      .get('/stores/04005/notaradius')
      .expect(200, done);
  });    
});