const d = document
const form = d.getElementById('form')
const loginUser = async (email, password) => {
	const res = await fetch('http://localhost:3000/api/users/login', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			email,
			password,
		}),
	})
	const data = await res.json()
	if (data.user) {
		window.location.href = './main.html'
	}
	console.log(data)
}
form.addEventListener('submit', e => {
	e.preventDefault()
	const email = d.getElementById('email').value
	const password = d.getElementById('password').value
	loginUser(email, password)
})
