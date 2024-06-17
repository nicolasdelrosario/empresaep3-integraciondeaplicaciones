import mongoose from 'mongoose'
import config from '../config/config.js'

const connection = async () => {
	try {
		await mongoose.connect(config.MONGO_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		})
		console.log('MongoDB connected')
	} catch (error) {
		console.log(error)
		process.exit(1)
	}
}

export default connection
