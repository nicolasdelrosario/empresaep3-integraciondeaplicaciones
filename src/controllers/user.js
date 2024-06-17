import bcrypt from 'bcryptjs'
import User from '../models/User.js'

const getUsers = async (req, res) => {
	try {
		const users = await User.find()
		res.status(200).json(users)
	} catch (error) {
		res.status(500).send(error.message)
	}
}

const getUser = async (req, res) => {
	try {
		const user = await User.findById(req.params.id)
		res.status(200).json(user)
	} catch (error) {
		res.status(500).send(error.message)
	}
}

const createUser = async (req, res) => {
	try {
		const { name, email, password } = req.body
		const salt = await bcrypt.genSalt(10)
		const hashedPassword = await bcrypt.hash(password, salt)

		const newUser = new User({ name, email, password: hashedPassword })
		await newUser.save()
		res.status(201).json(newUser)
	} catch (error) {
		res.status(500).send(error.message)
	}
}

export const method = {
	getUsers,
	getUser,
	createUser,
}
