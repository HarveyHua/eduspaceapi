// See https://sequelize.org/master/manual/model-basics.html
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const users = sequelizeClient.define('users', {

    uname: {    //用户名
      type: DataTypes.STRING,   //字符串类型
      allowNull: false,   //不允许为空
      unique: true    //用户名唯一
    },
    password: {   //密码
      type: DataTypes.STRING,   //字符串类型
      allowNull: false    //不允许为空
    },
    phone: {    //电话
      type:DataTypes.STRING,
      allowNull:false
    },
    email:DataTypes.STRING,   //邮箱
    organization:{
      type:DataTypes.STRING,
      defaultValue:8888   //默认值8888
    },
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  users.associate = function (models) {
    // Define associations here
    // See https://sequelize.org/master/manual/assocs.html
  };

  return users;
};
