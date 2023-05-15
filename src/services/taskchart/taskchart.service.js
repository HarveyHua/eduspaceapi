// Initializes the `taskchart` service on path `/taskchart`
const { Taskchart } = require('./taskchart.class');
const createModel = require('../../models/taskchart.model');
const hooks = require('./taskchart.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/taskchart', new Taskchart(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('taskchart');

  service.hooks(hooks);
};
