const assert = require('assert');
const app = require('../../src/app');

describe('\'studentfile\' service', () => {
  it('registered the service', () => {
    const service = app.service('studentfile');

    assert.ok(service, 'Registered the service');
  });
});
