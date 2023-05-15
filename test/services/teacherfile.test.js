const assert = require('assert');
const app = require('../../src/app');

describe('\'teacherfile\' service', () => {
  it('registered the service', () => {
    const service = app.service('teacherfile');

    assert.ok(service, 'Registered the service');
  });
});
