function enviarDados(){
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let numero = document.getElementById("numero").value;
    let propriedade = document.getElementById("propriedade").value;
    console.log(propriedade)
    console.log(nome)
    if(nome == "" )
        alert("Complete seu nome");

    else if(email == "" )
        alert("Complete seu email");

    else if(numero == "" )
        alert("Complete seu numero");
    
    else if(propriedade.value == "" )
        console.log(propriedade.value)

    else
    alert("Cadastro completo");

}