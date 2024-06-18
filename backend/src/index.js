import app from './app.js'
import connection from './database/database.js'

const main = async () => {
	await connection()
	app.listen(app.get('port'))
	console.log(`Server started on port ${app.get('port')}`)
}

main()
