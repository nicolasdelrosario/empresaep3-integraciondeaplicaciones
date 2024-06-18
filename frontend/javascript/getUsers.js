const d = document
const usersWrapper = d.getElementById('users')

const getUsers = async () => {
	const res = await fetch('http://localhost:3000/api/users')
	const data = await res.json()
	return data
}

const init = async () => {
	const users = await getUsers()
	users.forEach(user => {
		const { name, email } = user
		usersWrapper.innerHTML += `
			<div class="user">
				<p class="user__description">Name: </br> ${name}</p>
				<p class="user__description">Email: <br/> ${email}</p>
			</div>
		`
	})
}

init()
