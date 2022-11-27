// Loggin 
let loginForm = document.querySelector("#loginForm");
let signUpForm = document.querySelector('#signUpForm');


document.addEventListener("DOMContentLoaded", () => {
    addListeners();
})

const addListeners = () => {
    loginForm.addEventListener("submit", fetchLogin);
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
            const response = await fetch("https://fcback-production.up.railway.app/login", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(credentials),
            })
            const data = await response.json();
            if (data === 'authenticate') location.href = "menuUsuario.html"
            else {
                alert(data);
                location.reload();
            }

        } catch (error) {
            console.log(error);
        }

    }
}
