document.addEventListener('DOMContentLoaded', () => {

  /////  modelo 3D rotacion 
  const modelo = document.querySelector('model-viewer');

  modelo.addEventListener('load', () => {
    modelo.setAttribute('autoplay', true);
    modelo.setAttribute('animation-name', 'orbit');
  });

  document.getElementById('btnDiaNoche').addEventListener('click', temaNoche);

  function temaNoche() {
    document.body.classList.toggle('dark');
    document.getElementById('footerthema').classList.toggle('dark');
    document.getElementById('contactoTema').classList.toggle('linkCOn');
    document.getElementById("redestikto").classList.toggle('redesInfop');
    document.getElementById("redeinstagram").classList.toggle('redesInfop');
    document.getElementById("redeGithub").classList.toggle('redesInfop');
    document.getElementById("redesEmail").classList.toggle('redesInfop');
  }

  document.addEventListener('scroll', function () {
    const menu = document.getElementById('menu');
    if (window.scrollY > 50) {
      menu.classList.add('scrolled');
    } else {
      menu.classList.remove('scrolled');
    }
  });

  document.getElementById('contactoTema').addEventListener('click', () => {
    document.getElementById('model').style.display = 'flex';
  });

  document.getElementById("cerrarModal").addEventListener('click', () => {
    document.getElementById('model').style.display = 'none';
  });

  let buttuModal = document.getElementById('enviarDato');

  buttuModal.addEventListener('click', () => {
    let nombre = document.getElementById('nombre');
    let email = document.getElementById('email');
    let telefono = document.getElementById('telefono');


    if (nombre.value == "" ) {
      nombre.classList.add('bordeColorRed');

    } else if (email.value == "") {
      
      email.classList.add('bordeColorRed');
    }else if(telefono.value == "") {
      
      telefono.classList.add('bordeColorRed');
    }else {
      alersuccess()
      nombre.classList.remove('bordeColorRed');
      email.classList.remove('bordeColorRed');
      telefono.classList.remove('bordeColorRed');
    }
  });



  const alersuccess = () => {
    Swal.fire({
      title: "Drag me!",
      icon: "success",
      draggable: true
    });
  }

});