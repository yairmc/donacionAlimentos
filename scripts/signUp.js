
// Loggin 
let signUpForm = document.querySelector('#signUpForm');


document.addEventListener("DOMContentLoaded", () => {
    addListeners();
})

const addListeners = () => {
    signUpForm.addEventListener("submit", fetchSignUp);
}
// SignUp 

const fetchSignUp = async (e) => {
    e.preventDefault();
    const donador = document.querySelector('#donador')
    const centro = document.querySelector('#centro')
    const newUsername = document.querySelector('#newUsername');
    const newPassword = document.querySelector('#newPassword');
    const repeatPassword = document.querySelector('#repeatPassword');
    const address = document.querySelector('#address');
    const celphone = document.querySelector('#celphone');
    const timeStart = document.querySelector('#timeStart');
    const timeEnd = document.querySelector('#timeEnd');

    let typeUser;
    if (donador.checked) typeUser = 'donador'
    else if (centro.checked) typeUser = 'centro'
    else alert('Escoge un usuario')

    if (newUsername.value === '' || newPassword.value === ''
        || repeatPassword.value === '' || address.value === '' || celphone.value === '') {
        alert('Porfavor llenar todos los campos');
        donador.checked = false;
        centro.checked = false;
        newUsername.value = '';
        newPassword.value = '';
        repeatPassword.value = '';
        address.value = ''
        celphone.value = '';
        timeStart.value = '';
        timeEnd.value = '';
        return;
    } else {



        try {
            if (typeUser==='donador') {
                timeStart.value = '0'; 
                timeEnd.value = '0';
            }
            const credentials = {
                user: typeUser,
                username: newUsername.value,
                password: newPassword.value,
                address: address.value,
                celphone: celphone.value,
                timeStart: timeStart.value,
                timeEnd: timeEnd.value
            }

            const response = await fetch('https://fcback-production.up.railway.app/signUp', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(credentials)
            });
            const data = await response.json();
            console.log(data);
            if (data === 'signUp success') location.href = "/pages/login.html"
            else {
                alert(data);
                location.reload();
            }
        } catch (error) {
            console.log(error);
        }
        donador.checked = false;
        centro.checked = false;
        newUsername.value = '';
        newPassword.value = '';
        repeatPassword.value = '';
        address.value = ''
        celphone.value = '';
        timeStart.value = '';
        timeEnd.value = '';
    }
}


// 5432 port of possgres 