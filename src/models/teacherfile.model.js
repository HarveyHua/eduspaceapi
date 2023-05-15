// See https://sequelize.org/master/manual/model-basics.html
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const teacherfile = sequelizeClient.define('teacherfile', {
    tcname: {            //老师姓名
      type: DataTypes.STRING,
      allowNull: false,   //是否允许为空
    },
    nickname: DataTypes.STRING,  //昵称
    sex:DataTypes.TINYINT,      //性别 0女  1男
    skilled:DataTypes.STRING,   //擅长科目
    certificate:DataTypes.STRING, //证书
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  teacherfile.associate = function (models) {
    // Define associations here
    // See https://sequelize.org/master/manual/assocs.html
  };

  return teacherfile;
};
