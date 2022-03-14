let btnx = document.querySelector('#btn1');
const ximg = document.querySelector('#imagem');
const texto = document.querySelector('#state');

btnx.addEventListener('click', () =>{
    if (btnx.value == 'firstState'){
    ximg.src = 'assets/img/still.gif'
    texto.innerText = 'Aguardando ...'
    btnx.value = 'secondState'
} else if (btnx.value == 'secondState'){
    ximg.src = 'assets/img/1122.gif'
    texto.innerText = 'Carregando 1/3 ...'
    btnx.value = 'thirdState'
} else if (btnx.value == 'thirdState'){
    ximg.src = 'assets/img/2336.gif'
    texto.innerText = 'Carregando 2/3 ...'
    btnx.value = 'fourthState'
} else if (btnx.value == 'fourthState'){
    ximg.src = 'assets/img/3752.gif'
    texto.innerText = 'Pronto ! 3/3 ...'
    btnx.value = 'firstState'
}
})
