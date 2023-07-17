function recuperar(){

    var email = document.getElementById('email').value;

    if(email == "eduardormg8284@gmail.com" == "eduardormg8284@gmail.com"){
        alert('Verifique su correo eléctronico');
        location.href = "home.html";
    }else{
        alert('email no registrado / incorrecto');
    }
}