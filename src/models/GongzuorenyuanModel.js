import { Sequelize, DataTypes } from 'sequelize'
import moment from 'moment'
import sequelize from './sequelize'

// 工作人员
const GongzuorenyuanModel = sequelize.define('GongzuorenyuanModel', {
	id: {
		type: DataTypes.BIGINT,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false,
		comment: '主键id'
	},
	yuangonggonghao: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '员工工号'
	},
	mima: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '密码'
	},
	yuangongxingming: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '员工姓名'
	},
	xingbie: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '性别'
	},
	touxiang: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '头像'
	},
	lianxidianhua: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '联系电话'
	},
	addtime: {
  		type: DataTypes.DATE,
  		defaultValue: DataTypes.NOW,
    	allowNull: false,
    	get() {
            return moment(this.getDataValue('addtime')).format('YYYY-MM-DD HH:mm:ss')
        },
		comment: '添加时间'
	}
}, {
	timestamps: false,
	freezeTableName: true,
	tableName: 'gongzuorenyuan'
})

export default GongzuorenyuanModel
