function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
}

function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

 const nombre = document.getElementById("nombre");
 const apellido = document.getElementById("apellido");
 const email = document.getElementById("email");
 const password1 = document.getElementById("password1");
 const password2 = document.getElementById("password2");
 const checkbox = document.getElementById("terminos");
 const boton = document.getElementById("regBtn");
 let mensaje

 boton.addEventListener("click", function(){
    if (nombre.value == "" || apellido.value == "" || email.value == "" ||
     !checkbox.checked || password1.value != password2.value || password1.value.length < 6) {
        showAlertError()
     }
     else{
        showAlertSuccess()
    }
 });
