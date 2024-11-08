// tests/setup.test.js

import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import { execSync } from 'child_process';
// import http from 'http';
// import app from '../app/app.js';
// import request from 'supertest';
// import fs from 'fs';
// import path from 'path';
// import { sequelize as db } from '../models/database.js';

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
// describe('Server Setup', () => {
//   let server;

//   beforeAll((done) => {
//     server = http.createServer(app);
//     server.listen(0, (err) => {
//       if (err) {
//         done(err);
//         return;
//       }
//       done();
//     });
//   });

//   afterAll((done) => {
//     server.close(done);
//   });

//   it('should start the server without errors', () => {
//     expect(server.listening).toBe(true);
//   });
// });

// describe('GET /ping', () => {
//   it('should return status 200', async () => {
//     const response = await request(app).get('/ping');
//     expect(response.status).toBe(200);
//     expect(response.text).toBe('pong');
//   });
// });


// describe('Project Structure', () => {
//   it('should have a controllers directory', () => {
//     expect(fs.existsSync('./controllers')).toBe(true);
//   });

//   it('should have a models directory', () => {
//     expect(fs.existsSync('./models')).toBe(true);
//   });

//   it('should have a routes directory', () => {
//     expect(fs.existsSync('./routes')).toBe(true);
//   });

//   it('should have a tests directory', () => {
//     expect(fs.existsSync('./tests')).toBe(true);
//   });

//   it('should have an app.js file at the root', () => {
//     expect(fs.existsSync('./app/app.js')).toBe(true);
//   });

//   it('should have node_modules directory with dependencies', () => {
//     expect(fs.existsSync('./node_modules')).toBe(true);
//   });
// });

// describe('Backend setup', () => {
//    // Test 7: Le middleware 'body-parser' est configuré.
//    it("should have 'body-parser' middleware configured", () => {
//     const appStack = app._router.stack;
//     const bodyParserUsed = appStack.some(layer => {
//       return layer && layer.name && (layer.name === 'jsonParser' || layer.name === 'urlencodedParser');
//     });
//     expect(bodyParserUsed).toBe(true);
//   });

//   // Test 8: La base de données est connectée.
//   it("should connect to the database", async () => {
//     // TODO: connect to the database: create a database.js file in the config directory and connect to the database

//     try {
//       await db.authenticate();
//       expect(true).toBe(true);
//     } catch (error) {
//       expect(error).toBeUndefined();
//     }
//   });

//   // Test 9: La route POST '/chat' est définie.
//   it("should have a POST '/chat' route defined", async () => {
//     const response = await request(app).post('/chat').send({ message: 'Hello' });
//     expect(response.status).not.toBe(404);
//   });

//   // Test 10: Le contrôleur 'ChatController' est créé.
//   it("should have a 'ChatController.js' file in 'controllers' directory", () => {
//     expect(fs.existsSync(path.join(__dirname, '../controllers/ChatController.js'))).toBe(true);
//   });

//   // Test 12: Le contrôleur 'ChatController' exporte une fonction 'createMessage'.
//   it("'ChatController' should export a 'createMessage' function", () => {
//     const ChatController = require('../controllers/ChatController.js');
//     expect(typeof ChatController.createMessage).toBe('function');
//   });

//   // Test 13: Le middleware 'body-parser' est ajouté avant les routes.
//   it("should have 'body-parser' middleware before routes", () => {
//     const appStack = app._router.stack;
//     const bodyParserIndex = appStack.findIndex(layer => layer.name === 'jsonParser' || layer.name === 'urlencodedParser');
//     const routeIndex = appStack.findIndex(layer => layer.route);
//     expect(bodyParserIndex).toBeLessThan(routeIndex);
//   });

//   // Test 14: Le modèle 'Message' existe dans 'models'.
//   it("should have a 'Message.js' file in 'models' directory", () => {
//     expect(fs.existsSync(path.join(__dirname, '../models/Message.js'))).toBe(true);
//   });

//   // Test 15: Le modèle 'Message' est correctement défini.
//   it("should have 'Message' model defined", () => {
//     const Message = require('../models/Message.js').default;
//     expect(Message).toBeDefined();
//   });

//   // Test 16: La base de données synchronise les modèles sans erreur.
//   it("should synchronize models with the database without errors", async () => {
//     try {
//       await db.sync();
//       expect(true).toBe(true);
//     } catch (error) {
//       expect(error).toBeUndefined();
//     }
//   });

//   // Test 17: Le fichier 'routes/chat.js' est présent.
//   it("should have a 'chat.js' file in 'routes' directory", () => {
//     expect(fs.existsSync(path.join(__dirname, '../routes/chat.js'))).toBe(true);
//   });

//   // Test 18: Le routeur 'chat.js' est utilisé dans 'app.js'.
//   it("should use 'chat.js' router in 'app.js'", () => {
//     const chatRouteUsed = app._router.stack.some(
//       layer => layer.handle && layer.handle.name === 'router' && layer.regexp && layer.regexp.test('/chat')
//     );
//     expect(chatRouteUsed).toBe(true);
//   });

//   // Test 19: L'application écoute sur le port spécifié.
//   it("should listen on the specified port", () => {
//     const PORT = process.env.PORT || 3000;
//     expect(app.get('port')).toBe(PORT);
//   });

//   // Test 20: La configuration initiale est correcte.
//   it("should have the initial configuration correct", () => {
//     expect(true).toBe(true);
//   });
// });
