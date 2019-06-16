import request from 'supertest';
import app from '../../../../app';


describe('SAMPLE unit test', () => {
  it('should get all of user message', (done) => {
    request(app)
      .get('/user')
      .expect(200)
      .end((err, res) => {
        if (err) {
          return done(err)
        }
        return done()
      })
  });
});
