const users = require('./users/users.service.js');
const teacherfile = require('./teacherfile/teacherfile.service.js');
const taskchart = require('./taskchart/taskchart.service.js');
const studentfile = require('./studentfile/studentfile.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(teacherfile);
  app.configure(taskchart);
  app.configure(studentfile);
};
