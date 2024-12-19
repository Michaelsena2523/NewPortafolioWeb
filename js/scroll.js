

document.addEventListener('DOMContentLoaded', ()=> {

    
    ScrollReveal().reveal('.scrollprincipal', 
        {delay : 500},
        {opacity : 0.8},
        
    );


    ScrollReveal().reveal('.img3d', 

        {
            rotate: {
                x: 360,
                y: 260,
                z: 100
            }, 
            duration: 5000,

        }, 

    );



    ScrollReveal().reveal('.linkmenu',

        { distance: '-600px' , origin: 'left', duration: 5000, },
        
    );

    ScrollReveal().reveal('.linkmenu2',

        { distance: '-600px' , origin: 'right', duration: 5000, },
        
    );
  

})

