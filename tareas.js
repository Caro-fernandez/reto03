let ingreso=document.getElementById('nombre')
let btn=document.getElementById('btn')
let nombre= document.getElementById('nombre')
let lista=document.getElementById('lista')
let task1=document.getElementById('task1')
let task2=document.getElementById('task2')
let task3=document.getElementById('task3')
let task4=document.getElementById('task4')
let task5=document.getElementById('task5')
let task6=document.getElementById('task6')
let task7=document.getElementById('task7')
let task8=document.getElementById('task8')
let task9=document.getElementById('task9')
let task10=document.getElementById('task10')
let titulo=document.getElementById('title')

lista.style.display="none"

btn.addEventListener('click', function(){
   if(nombre=ingreso.value) {
      alert('Hola, '+ingreso.value+ '! Estas son tus tareitas de hoy.')
   }   
      lista.style.display="block"    
      ingreso.style.display="none"
      btn.style.display="none" 
      titulo.innerHTML='¿Qué tenés que hacer hoy, '+ingreso.value+'?'
})  


document.addEventListener ('click', function(e) {
   if(e.target.id =='task1'|| tarea1.checked) {
      alert('Felicitaciones, ' + ingreso.value +'! Completaste tu tareita: ' + task1.innerText)
     task1.classList.add('tachada')
   } else if (e.target.id== 'task2'|| tarea2.checked){
      alert('Felicitaciones, ' + ingreso.value +'! Completaste tu tareita: '+ task2.innerText)
      task2.classList.add('tachada')
     } else if  (e.target.id== 'task3'|| tarea3.checked){
        alert('Felicitaciones, ' + ingreso.value +'! Completaste tu tareita: '+ task3.innerText)  
        task3.classList.add('tachada')
     } else if (e.target.id== 'task4'|| tarea4.checked){
      alert('Felicitaciones, ' + ingreso.value +'! Completaste tu tareita: '+ task4.innerText)
      task4.classList.add('tachada')
     } else if  (e.target.id== 'task5'|| tarea5.checked){
        alert('Felicitaciones, ' + ingreso.value +'! Completaste tu tareita: '+ task5.innerText)  
        task5.classList.add('tachada')
     } else if (e.target.id== 'task6'|| tarea6.checked){
      alert('Felicitaciones, ' + ingreso.value +'! Completaste tu tareita: '+ task6.innerText)
      task6.classList.add('tachada')
     } else if  (e.target.id== 'task7'|| tarea7.checked){
        alert('Felicitaciones, ' + ingreso.value +'! Completaste tu tareita: '+ task7.innerText)  
        task7.classList.add('tachada')
     } else if (e.target.id== 'task8'|| tarea8.checked){
      alert('Felicitaciones, ' + ingreso.value +'! Completaste tu tareita: '+ task8.innerText)
      task8.classList.add('tachada')
     } else if  (e.target.id== 'task9'|| tarea9.checked){
        alert('Felicitaciones, ' + ingreso.value +'! Completaste tu tareita: '+ task9.innerText)  
        task9.classList.add('tachada')
     } else if (e.target.id =='task10'|| tarea10.checked) {
      alert('Felicitaciones, ' + ingreso.value +'! Completaste tu tareita: ' + task10.innerText)
     task10.classList.add('tachada')
     }
   }) 


    
  














