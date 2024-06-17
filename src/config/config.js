import { config } from 'dotenv'

config()

export default {
	PORT: process.env.PORT || 3000,
	MONGO_URI: process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/empresa-ep3',
}
