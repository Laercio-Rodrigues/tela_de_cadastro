const button = document.querySelector('.button-cadastrar')

const cadastrar = () => {
    const inputName = document.querySelector('.input-name').value

    const inputEmail = document.querySelector('.input-email').value

    const inputPassword = document.querySelector('.input-senha').value

    const inputConfirmPassword = document.querySelector('.input-confirmar-senha'). value

    console.log(inputName)
    console.log(inputEmail)
    console.log(inputPassword)
    console.log(inputConfirmPassword)
}

button.addEventListener('click', cadastrar)