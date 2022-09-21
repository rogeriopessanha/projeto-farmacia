
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
        document.querySelector('..topo .topo-2').classList.remove('active')
    }
}




var swiper = new Swiper(".mySwiper", {
    // spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 10000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    // navigation: {
    //     nextEl: ".swiper-button-next",
    //     prevEl: ".swiper-button-prev",
    // },
});