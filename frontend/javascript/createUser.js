const d = document
const form = d.getElementById('form')
const createUser = async (name, email, password) => {
	const res = await fetch('http://localhost:3000/api/users', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			name,
			email,
			password,
		}),
	})
	const data = await res.json()
	console.log(data)
}
form.addEventListener('submit', e => {
	e.preventDefault()
	const name = d.getElementById('name').value
	const email = d.getElementById('email').value
	const password = d.getElementById('password').value
	createUser(name, email, password).then(() => {
		d.getElementById('name').value = ''
		d.getElementById('email').value = ''
		d.getElementById('password').value = ''
	})
})
