// Initializes the `teacherfile` service on path `/teacherfile`
const { Teacherfile } = require('./teacherfile.class');
const createModel = require('../../models/teacherfile.model');
const hooks = require('./teacherfile.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/teacherfile', new Teacherfile(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('teacherfile');

  service.hooks(hooks);
};
