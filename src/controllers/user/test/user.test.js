import request from 'supertest';
import 'babel-polyfill';
import mongoose from 'mongoose';
import expect from 'expect';
import app from '../../../../app';

afterAll(() => {
  Object.keys(mongoose.connection.collections).forEach((name) => {
    mongoose.connection.collections[name].drop(() => {});
  });
});

let auth; 

describe('SAMPLE unit test', () => {
  test('should get 401 error', (done) => {
    request(app)
      .get('/user')
      .expect(401)
      .end((err) => {
        if (err) {
          return done(err);
        }
        return done();
      });
  });

  test('should create a user', (done) => {
    request(app)
      .post('/user')
      .send({
        email: 'test@domain.com',
        password: 'helloWorld',
        username: 'test',
      })
      .expect(200)
      .end((err) => {
        if (err) {
          return done(err);
        }
        return done();
      });
  });

  test('should login with user', (done) => {
    request(app)
      .post('/auth')
      .send({
        email: 'test@domain.com',
        password: 'helloWorld',
      })
      .expect(200)
      .then(({ body }) => {
        auth = `bearer ${body.token}`;
        return done();
      })
      .catch((err) => {
        return done(err);
      });
  });

  test('should get all of users', (done) => {
    request(app)
      .get('/user')
      .set('Authorization', auth)
      .expect(200)
      .end((err, data) => {
        if (err) {
          return done(err);
        }
        expect(data.body.length).toEqual(1);
        return done();
      });
  })

});
