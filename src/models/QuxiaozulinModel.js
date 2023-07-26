import { Sequelize, DataTypes } from 'sequelize'
import moment from 'moment'
import sequelize from './sequelize'

// 取消租赁
const QuxiaozulinModel = sequelize.define('QuxiaozulinModel', {
	id: {
		type: DataTypes.BIGINT,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false,
		comment: '主键id'
	},
	dingdanbianhao: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '订单编号'
	},
	qichemingcheng: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '汽车名称'
	},
	chepaihao: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '车牌号'
	},
	zulintianshu: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '租赁天数'
	},
	zongjine: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '总金额'
	},
	quxiaoyuanyin: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '取消原因'
	},
	quxiaoriqi: {
		type: DataTypes.DATEONLY,
		allowNull: true,
		get() {
            return moment(this.getDataValue('quxiaoriqi')).format('YYYY-MM-DD')
        },
		comment: '取消日期'
	},
	yonghuming: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '用户名'
	},
	shouji: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '手机'
	},
	sfsh: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '是否审核'
	},
	shhf: {
		type: DataTypes.TEXT,
		defaultValue: '',
		allowNull: true,
		comment: '审核回复'
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
	tableName: 'quxiaozulin'
})

export default QuxiaozulinModel
