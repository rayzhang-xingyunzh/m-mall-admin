import redis from 'redis'
import config from '../config'

const redisLink = config['redis'][process.env.NODE_ENV || 'development']['connectionString']
// const redisClient = redis.createClient(redisLink)
//
// redisClient
// 	.on('error', err => console.log('------ Redis connection failed ------' + err))
// 	.on('connect', () => console.log('------ Redis connection succeed ------'))

const redisClient = {
	get:(token,cb) => {
		cb(null,null)
	},

	set:() => {

	},

	expire:() =>{

	}
}
export default {
	redis: redis,
	redisClient: redisClient,
}
