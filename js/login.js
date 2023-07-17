function logar(){

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if(email == "" && password == "12345678"){
        alert('Sucesso');
        location.href = "home.html";
    }else{
        alert('Usuario ou senha incorretos');
    }
}