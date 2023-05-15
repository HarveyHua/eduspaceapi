const assert = require('assert');
const app = require('../../src/app');

describe('\'taskchart\' service', () => {
  it('registered the service', () => {
    const service = app.service('taskchart');

    assert.ok(service, 'Registered the service');
  });
});
