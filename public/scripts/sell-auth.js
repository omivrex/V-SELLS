const username = document.getElementById('username')
const password = document.getElementById('password')
const submit = document.getElementById('submit')

submit.onsubmit = (e) => {
    e.preventDefault()
    console.log(username.value, password.value)
}