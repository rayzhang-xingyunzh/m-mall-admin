export default {
	secret: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
	mongo: {
		development: {
			connectionString: 'mongodb://xyzh:xyzh@www.xingyunzh.com:27017/xyweappmall'
		},
		production: {
			connectionString: 'mongodb://xyzh:xyzh@www.xingyunzh.com:27017/xyweappmall'
		}
	},
	redis: {
		development: {
			connectionString: 'redis://127.0.0.1:6379'
		},
		production: {
			connectionString: 'redis://127.0.0.1:6379',
		}
	},
	upload: {
		tmp : 'public/tmp/',
		path: 'public/uploads/'
	},
	superAdmin: {
		username: 'admin',
		password: '123456',
	},
	orderStatus: {
		'submitted': '已提交',
		'canceled' : '已取消',
		'confirmed': '已确认',
		'finished' : '已完成',
	},
	wechat: {
		appid: 'wxacb797a7e31213fe',
		secret: 'f915ef61c2f50c5a097c3db159c4fe6c',
	},
}
