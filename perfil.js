const iUsario = document.getElementById('usuarioCreado');


document.addEventListener('DOMContentLoaded',()=>{
    const usuarioGuardado = localStorage.getItem('usuario');
    if(usuarioGuardado){
        iUsario.textContent = 'Bienvenido de nuevo ' + usuarioGuardado;
    }
})
