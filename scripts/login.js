// Loggin 
let loginForm = document.querySelector("#loginForm");
let signUpForm = document.querySelector('#signUpForm');

document.addEventListener("DOMContentLoaded", () => {
    addListeners();
})

const addListeners = () => {
    loginForm.addEventListener("submit", fetchLogin);
    signUpForm.addEventListener("submit", fetchSignUp);
}

const fetchLogin = async (e) => {
    e.preventDefault();
    const username = document.querySelector("#username");
    const password = document.querySelector("#password");

    if (username.value === '' || password.value === '') {
        alert('Porfavor llenar todos los campos');
        username.value = '';
        password.value = '';
        return;
    } else {

        try {

            const credentials = {
                username: username.value,
                password: password.value
            }
            const response = await fetch("http://localhost:5001/login", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(credentials),
            })
            const data = await response.json();
            if (data === 'authenticate') location.href = "/pages/menuPrincipal.html"
            else {
                alert(data);
                location.reload();
            }

        } catch (error) {
            console.log(error);
        }

    }
}

// SignUp 

const fetchSignUp = async (e) => {
    e.preventDefault();
    const newUsername = document.querySelector('#newUsername');
    const newPassword = document.querySelector('#newPassword');
    const repeatPassword = document.querySelector('#repeatPassword');

    if (newUsername.value === '' || newPassword.value === '' || repeatPassword.value === '') {
        alert('Porfavor llenar todos los campos');
        newUsername.value = '';
        newPassword.value = '';
        repeatPassword.value = '';
        return;
    } else {

        try {
            const credentials = {
                username: newUsername.value,
                password: newPassword.value
            }

            const response = await fetch('http://localhost:5001/signUp', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(credentials)
            });
            const data = await response.json();
            if (data === 'signUp success') location.href = "/pages/menuPrincipal.html"
            else {
                alert(data);
                location.reload();
            }
        } catch (error) {
            console.log(error);
        }
        newUsername.value = '';
        newPassword.value = '';
        repeatPassword.value = '';
    }
}


// 5432 port of possgres 