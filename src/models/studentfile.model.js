// See https://sequelize.org/master/manual/model-basics.html
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const studentfile = sequelizeClient.define('studentfile', {
    stdname: {    //学员姓名
      type: DataTypes.STRING,
      allowNull: false
    },
    phone:{     //电话
      type:DataTypes.STRING,
      allowNull: false
    },
    sex:{         //性别：0为女 1为男
      type:DataTypes.TINYINT,
      defaultValue:0
    },
    birthday:DataTypes.DATE,  //生日
    headphoto:DataTypes.STRING,   //头像
    school:DataTypes.STRING,   //学校
    source:DataTypes.STRING,    //学员来源
    reference:DataTypes.STRING,   //推荐人
    sparephone:DataTypes.STRING,   //备用号码
    address:DataTypes.STRING,     //家庭住址
    idnumber:DataTypes.STRING,  //身份证号码
    intentiongrade:{    //意向级别 0-A级 1-B级 2-C级 3-D级
      type:DataTypes.TINYINT,
      defaultValue: 3
    },
    followmen:DataTypes.STRING,   //跟进人
    label:DataTypes.STRING,   //标签
    adddate:DataTypes.DATE,   //添加日期
    note:DataTypes.STRING,    //备注
    attachment:DataTypes.STRING,  //上传附件
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  studentfile.associate = function (models) {
    // Define associations here
    // See https://sequelize.org/master/manual/assocs.html
  };

  return studentfile;
};
