 //carrusel home
 const primero = document.querySelector(' .primero')
 const punto = document.querySelectorAll(' .punto')
 
 //click en punto
 punto.forEach((cadaPunto,i)=>{    
   punto[i].addEventListener('click',()=>{    
    let posicion =i
     let operacion = posicion* -50
     primero.style.transform = `translateX(${operacion}%)`
     punto.forEach((cadaPunto,i)=>{
        punto[i].classList.remove('activo')
     })
     punto[i].classList.add('activo')
   })
 })
 