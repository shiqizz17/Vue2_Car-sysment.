import { Sequelize, DataTypes } from 'sequelize'
import moment from 'moment'
import sequelize from './sequelize'

// 汽车信息
const QichexinxiModel = sequelize.define('QichexinxiModel', {
	id: {
		type: DataTypes.BIGINT,
		primaryKey: true,
		autoIncrement: true,
		allowNull: false,
		comment: '主键id'
	},
	qichemingcheng: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '汽车名称'
	},
	qicheleixing: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '汽车类型'
	},
	qichepinpai: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '汽车品牌'
	},
	qicheyanse: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '汽车颜色'
	},
	chepaihao: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '车牌号'
	},
	tupian: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '图片'
	},
	tianchuang: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '天窗'
	},
	huandangfangshi: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '换挡方式'
	},
	qichezhuangtai: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '汽车状态'
	},
	zuowei: {
		type: DataTypes.STRING,
		defaultValue: '',
		allowNull: true,
		comment: '座位'
	},
	meirizujin: {
		type: DataTypes.INTEGER,
		defaultValue: 0,
		allowNull: true,
		comment: '每日租金'
	},
	qichexiangqing: {
		type: DataTypes.TEXT,
		defaultValue: '',
		allowNull: true,
		comment: '汽车详情'
	},
	clicktime: {
		type: DataTypes.DATE,
		allowNull: true,
		get() {
            return moment(this.getDataValue('clicktime')).format('YYYY-MM-DD HH:mm:ss')
        },
		comment: '最近点击时间'
	},
	clicknum: {
		type: DataTypes.INTEGER,
		defaultValue: 0,
		allowNull: true,
		comment: '点击次数'
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
	tableName: 'qichexinxi'
})

export default QichexinxiModel
