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

const validateUser = async (req, res) => {
	try {
		const { email, password } = req.body
		const user = await User.findOne({ email })

		if (!user) {
			return res.status(404).json({ message: 'User not found' })
		}

		const isMatch = await bcrypt.compare(password, user.password)

		if (!isMatch) {
			return res.status(400).json({ message: 'Invalid credentials' })
		}

		res.status(200).json({
			message: 'User validated',
			user: user.toObject({ versionKey: false }),
		})
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
	validateUser,
	createUser,
}
