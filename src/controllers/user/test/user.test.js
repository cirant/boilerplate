import request from 'supertest';
import 'babel-polyfill';
import app from '../../../../app';


describe('SAMPLE unit test', () => {
  it('should get all of user message', async (done) => {
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
});
