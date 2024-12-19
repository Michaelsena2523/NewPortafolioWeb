document.addEventListener('DOMContentLoaded', ()=>{
  
  /////  modelo 3D rotacion 
    const modelo = document.querySelector('model-viewer');
    
    modelo.addEventListener('load', () => {
      modelo.setAttribute('autoplay', true);
      modelo.setAttribute('animation-name', 'orbit');
    });



   document.getElementById('btnDiaNoche').addEventListener('click', temaNoche);

 function temaNoche (){
   document.body.classList.toggle('dark');
   document.getElementById('footerthema').classList.toggle('dark');
   document.getElementById('contactoTema').classList.toggle('dark');
 }



 document.addEventListener('scroll', function() {
  const menu = document.getElementById('menu');
  if (window.scrollY > 50) {
    menu.classList.add('scrolled');
    
  } else {
    menu.classList.remove('scrolled');
  }
});

})    
