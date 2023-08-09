let ingreso=document.getElementById('nombre')
let btn=document.getElementById('btn')
let nombre= document.getElementById('nombre')
let lista=document.getElementById('lista')
let tarea1=document.getElementById('tarea1')
let mensaje=document.getElementById('mensaje')

lista.style.display="none"
btn.addEventListener('click', function(){
   alert('Hola, '+ingreso.value+ '! Estas son tus tareitas de hoy.')
   lista.style.display="block"    
   nombre.style.display="none"
   btn.style.display="none"
})

document.addEventListener ('click', function(e) {
   if(e.target.localName =='p') {
        var alerta=document.createElement('p')
        var texto=document.createTextNode('Felicitaciones, ' + ingreso.value +'! Completaste tu tareita!')
        alerta.appendChild(texto)
        //alert('Felicitaciones, ' + ingreso.value +'! Completaste tu tareita!')
        tarea1.classList.add('tachada')
      }
   }) 