// See https://sequelize.org/master/manual/model-basics.html
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const taskchart = sequelizeClient.define('taskchart', {
    tasktitle: {    //作业标题
      type: DataTypes.STRING,
      allowNull: false
    },
    sendtarget:{    //发送目标  0发送班级 1上课课次
      type:DataTypes.TINYINT,
      allowNull: false,
      defaultValue:0
    },
    deadline:DataTypes.DATEONLY,  //截止时间
    taskrequire:DataTypes.TEXT('long'),//作业要求
    attachment:DataTypes.STRING   //上传附件
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  taskchart.associate = function (models) {
    // Define associations here
    // See https://sequelize.org/master/manual/assocs.html
  };

  return taskchart;
};
