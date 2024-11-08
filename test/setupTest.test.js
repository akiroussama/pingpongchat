// tests/setup.test.js

import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import { execSync } from 'child_process';
import http from 'http';

describe('Environment Requirements', () => {
  it('should have Node.js v18 or higher installed', () => {
    const nodeVersion = process.version;
    const majorVersion = parseInt(nodeVersion.slice(1).split('.')[0]);
    expect(majorVersion).toBeGreaterThanOrEqual(18);
  });

  it('should have npm installed', () => {
    const npmVersion = execSync('npm -v').toString().trim();
    expect(npmVersion).toBeTruthy();
  });

  it('should have Git installed', () => {
    const gitVersion = execSync('git --version').toString().trim();
    expect(gitVersion.startsWith('git version')).toBe(true);
  });
});
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