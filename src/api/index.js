import { Router } from 'express'
import UsersController from './Users'
import FileController from './File'
import ConfigController from './Config'
import CommonController from './Common'
import YonghuController from './Yonghu'
import GongzuorenyuanController from './Gongzuorenyuan'
import QicheleixingController from './Qicheleixing'
import QichepinpaiController from './Qichepinpai'
import QicheyanseController from './Qicheyanse'
import QichexinxiController from './Qichexinxi'
import QichezulinController from './Qichezulin'
import QuxiaozulinController from './Quxiaozulin'
import QicheguihaiController from './Qicheguihai'
import StoreupController from './Storeup'
import NewsController from './News'
import MessagesController from './Messages'
import DiscussqichexinxiController from './Discussqichexinxi'

export default ({ config, db }) => {
	let api = Router()

	api.use('/users', UsersController({ config, db }))

	api.use('/file', FileController({ config, db }))

	api.use('/config', ConfigController({ config, db }))

	api.use('/', CommonController({ config, db }))

	api.use('/yonghu', YonghuController({ config, db }))

	api.use('/gongzuorenyuan', GongzuorenyuanController({ config, db }))

	api.use('/qicheleixing', QicheleixingController({ config, db }))

	api.use('/qichepinpai', QichepinpaiController({ config, db }))

	api.use('/qicheyanse', QicheyanseController({ config, db }))

	api.use('/qichexinxi', QichexinxiController({ config, db }))

	api.use('/qichezulin', QichezulinController({ config, db }))

	api.use('/quxiaozulin', QuxiaozulinController({ config, db }))

	api.use('/qicheguihai', QicheguihaiController({ config, db }))

	api.use('/storeup', StoreupController({ config, db }))

	api.use('/news', NewsController({ config, db }))

	api.use('/messages', MessagesController({ config, db }))

	api.use('/discussqichexinxi', DiscussqichexinxiController({ config, db }))

	return api
}
