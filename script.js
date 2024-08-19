let botaoSubmeter = document.getElementById("botao-submeter");

botaoSubmeter.addEventListener("click", submeter);

function submeter() {
    let elementoNome = document.getElementById("nome").value;
    let elementoIdade = document.getElementById("idade").value;
    let elementoEmail = document.getElementById("email").value;
    //console.log(elementoNome);
    //console.log(elementoIdade);
    //console.log(elementoEmail);

    console.log(validaEmail(elementoEmail));
}

function validaEmail(email) {
    return /^[\w]+@[\w]+.[a-zA-Z]+$/.test(email)
}