
pesquisaForm = document.querySelector('.form-pesquisa');

document.querySelector('#botao-pesquisar').onclick =() =>{
    pesquisaForm.classList.toggle('active');
}


// let loginForm = document.querySelector('.login-form-container');

// document.querySelector('#login-btn').onclick = () => {
//     loginForm.classList.toggle(active);
// }

// document.querySelector('#close-login-btn').onclick = () =>{
//     loginForm.classList.remove(active);
// }

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