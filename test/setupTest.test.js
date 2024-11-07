  // tests/setup.test.js

  import { describe, it, expect, beforeAll, afterAll } from 'vitest';
  import http from 'http';
  import app from '../app';

  describe('Server Setup', () => {
    let server;

    beforeAll((done) => {
      server = http.createServer(app);
      server.listen(3000, done);
    });

    afterAll((done) => {
      server.close(done);
    });

    it('should start the server without errors', () => {
      expect(server.listening).toBe(true);
    });
  });