
pesquisaForm = document.querySelector('.form-pesquisa');

document.querySelector('#botao-pesquisar').onclick =() =>{
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




var swiper = new Swiper(".banner-slider", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    // pagination: {
    //     el: ".swiper-pagination",
    //     clickable: true,
    // },
    // navigation: {
    //     nextEl: ".swiper-button-next",
    //     prevEl: ".swiper-button-prev",
    // },
});


var swiper = new Swiper(".produtos-slider", {
    spaceBetween: 10,
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
        
        450: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 4,
        },
        1024: {
            slidesPerView: 4,
        },
    },
});