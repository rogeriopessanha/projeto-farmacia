

pesquisaForm = document.querySelector('.form-pesquisa');

document.querySelector('#botao-pesquisar').onclick = () => {
    pesquisaForm.classList.toggle('active');
}


let loginForm = document.querySelector('.login-form-container');

document.querySelector('#login-btn').onclick = () => {
    loginForm.classList.toggle('active');
}

document.querySelector('#close-login-btn').onclick = () => {
    loginForm.classList.remove('active');
}



window.onscroll = () => {

    pesquisaForm.classList.remove('active');

    if (window.scrollY > 80) {
        document.querySelector('.topo .topo-2').classList.add('active')
    } else {
        document.querySelector('.topo .topo-2').classList.remove('active')
    }
}

window.onload = () => {
    if (window.scrollY > 80){
        document.querySelector('.topo .topo-2').classList.add('active')
    } else{
        document.querySelector('.topo .topo-2').classList.remove('active')
    }
}


fadeOut();

function loader(){
    document.querySelector('.loader-container').classList.add('active');
}

function fadeOut(){
    setTimeout(loader, 4000);
}


var swiper = new Swiper(".banner-slider", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
   
});


var swiper = new Swiper(".produtos-slider", {
    spaceBetween: 15,
    loop: true,
    centeredSlides: true,
    // grabCursor: 'true',
    autoplay: {
        delay: 6500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        
        450: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 3,
        },
        1440: {
            slidesPerView: 5,
        },
    },
});



var swiper = new Swiper(".ofertas-slider", {
    spaceBetween: 15,
    loop: true,
    centeredSlides: true,
    // grabCursor: 'true',
    autoplay: {
        delay: 6500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        
        450: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 3,
        },
        1440: {
            slidesPerView: 5,
        },
    },
});



var swiper = new Swiper(".marcas-slider", {
    spaceBetween: 10,
    loop: true,
    centeredSlides: true,
    grabCursor: 'true',
    autoplay: {
        delay: 6500,
        disableOnInteraction: false,
    },
    // navigation: {
    //     nextEl: ".swiper-button-next",
    //     prevEl: ".swiper-button-prev",
    // },
    breakpoints: {
        0: {
            slidesPerView: 3,
        },

        375: {
            slidesPerView: 3,
        },
        
        425: {
            slidesPerView: 3,
        },

        768: {
            slidesPerView: 7,
        },

        1024: {
            slidesPerView: 7,
        },

        1440: {
            slidesPerView: 9,
        },
    },
});


var swiper = new Swiper(".novidades-slider", {
    spaceBetween: 15,
    loop: true,
    centeredSlides: true,
    // grabCursor: 'true',
    autoplay: {
        delay: 6500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        
        450: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 3,
        },
        1440: {
            slidesPerView: 5,
        },
    },
});