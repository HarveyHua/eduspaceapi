// Initializes the `studentfile` service on path `/studentfile`
const { Studentfile } = require('./studentfile.class');
const createModel = require('../../models/studentfile.model');
const hooks = require('./studentfile.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/studentfile', new Studentfile(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('studentfile');

  service.hooks(hooks);
};
