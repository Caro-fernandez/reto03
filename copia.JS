btn.addEventListener('click', function(){
    if (nombre=' '){
         alert('Para ver tus tareitas debes ingresar tu nombre.')   
         lista.style.display="none"    
         nombre.style.display="block"
         btn.style.display="block" 
   } 
}) 

btn.addEventListener('click', function(){
    if(nombre=ingreso.value) {
       //No se cómo hacer para que el otro alert no aparezca
       alert('Hola, '+ingreso.value+ '! Estas son tus tareitas de hoy.')
       lista.style.display="block"    
       nombre.style.display="none"
       btn.style.display="none" 
    }    
 })  
 


document.addEventListener ('click', function(e) {
    if(e.target.id =='task1'|| tarea1.checked) {
       alert('Felicitaciones, ' + ingreso.value +'! Completaste tu tareita'+ taskTitle)
      task1.classList.add('tachada')
    } else if (e.target.id== 'task2'|| tarea2.checked){
     alert('Felicitaciones, ' + ingreso.value +'! Completaste tu tareita!')
     task2.classList.add('tachada')
    } else if  (e.target.id== 'task3'|| tarea3.checked){
       alert('Felicitaciones, ' + ingreso.value +'! Completaste tu tareita!')  
       task3.classList.add('tachada')
    }
   }) 
    
 