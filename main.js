const formulario = document.getElementById('formulario')
const iNombre = document.getElementById('nombre');
const saludo = document.getElementById('saludo');
const btnBorrar = document.getElementById('borrar');


formulario.addEventListener('submit',(e)=>{

    e.preventDefault();
    const nombre = iNombre.value.trim();
    localStorage.setItem('usuario',nombre);

    if(nombre == ''){
        alert('Ingrese un nombre');
        return;
    }
    saludo.textContent = 'Bienvenido ' + nombre;
    iNombre.value='';
});

document.addEventListener('DOMContentLoaded',()=>{

    const usuarioGuardado = localStorage.getItem('usuario');
    if(usuarioGuardado){
        saludo.textContent = 'Bienvenido de nuevo ' + usuarioGuardado;
    }
    

});

btnBorrar.addEventListener('click',()=>{

    localStorage.removeItem('usuario');
    saludo.textContent = 'Bienvenido Usuario Indefinido';
})

