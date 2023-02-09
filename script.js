const inputs = document.querySelectorAll('.input'); //Como o input é mais de um, é usado querySelectorAll. //.input serve para buscar a classe input.
const button = document.querySelector('.login_button'); //Para mexer no botão, foi necessário criar uma const para ele.

const handleFocus = ({ target }) => {
    const span = target.previousElementSibling; // ElementSibling é elemento interior, ou seja, nesse caso o elemento anterior de span é o input.
        span.classList.add('span-active'); //Adicionar a classe que você querer.
} //Basicamente aqui é quando você clicar na caixa de "username" vai fazer aquela animação para subir o username.

const handleFocusOut = ({ target }) => {
    if (target.value === '') { //Aqui é pra quando tiver algo escrito, o span username não ficar em cima do texto. Se o valor não tiver nada (String vazia ''), retorna ao normal.
        const span = target.previousElementSibling;
            span.classList.remove('span-active');
    }
}

const handleChange = () => {
    //Aqui embaixo é os dois inputs.
    const [username, password] = inputs; // A ordem que está, é basicamente o primeiro elemento (username) do array de input. E a variável password, é o segundo elemento do array de input.
    //Lá em cima já possui a constante input, que é um Array (forma de armazenar/guardar os dados).
    if (username.value && password.value.length >= 1) { //Value length(length é o tamanho) é se tiver algo escrito, o tamanho dele tem que ser igual ou maior que 1.
        button.removeAttribute('disabled');
        return;
    } 
        button.setAttribute('disabled', '');
}


inputs.forEach((input) => input.addEventListener('focus', handleFocus));
inputs.forEach((input) => input.addEventListener('focusout', handleFocusOut));
inputs.forEach((input) => input.addEventListener('input', handleChange));     

