// Бургер........

let Button = document.querySelector('.burgerPhoto');
let burger = document.querySelector('.nav')
let menuClose = document.querySelectorAll('.cross');
let overlay = document.querySelector('.body');

Button.addEventListener('click', function() {
    burger.classList.add('active');
    burger.classList.remove('close');
})

menuClose.forEach(element=>element.addEventListener('click', function() {
    burger.classList.remove('active');
    burger.classList.add('close');
}));

document.addEventListener('click', function(el) {
    if ( el.target.id != 'burgerPhoto' && el.target.id != 'nav') {
    burger.classList.remove('active');
    burger.classList.add('close');
}}); 


// Слайдер......
const sliderLine = document.querySelector('.sliderLine');

document.querySelector('.spain').addEventListener('click', function() {
    sliderLine.style.left = 860 + 'px';
    document.querySelector('#leftPagin').style.background = '#F2785C'
    document.querySelector('#rightPagin').style.background = 'rgba(242, 120, 92, 0.5)'
    document.querySelector('#centerPagin').style.background = 'rgba(242, 120, 92, 0.5)'
})

document.querySelector('.japan').addEventListener('click', function() {
    sliderLine.style.left = 0 + 'px';
    document.querySelector('#centerPagin').style.background = '#F2785C'
    document.querySelector('#leftPagin').style.background = 'rgba(242, 120, 92, 0.5)'
    document.querySelector('#rightPagin').style.background = 'rgba(242, 120, 92, 0.5)'
})

document.querySelector('.usa').addEventListener('click', function() {
    sliderLine.style.left = -860 + 'px';
    document.querySelector('#leftPagin').style.background = 'rgba(242, 120, 92, 0.5)'
    document.querySelector('#rightPagin').style.background = '#F2785C'
    document.querySelector('#centerPagin').style.background = 'rgba(242, 120, 92, 0.5)'
})


document.querySelector('.leftPagin').addEventListener('click', function() {
    sliderLine.style.left = 860 + 'px';
    document.querySelector('#leftPagin').style.background = '#F2785C'
    document.querySelector('#rightPagin').style.background = 'rgba(242, 120, 92, 0.5)'
    document.querySelector('#centerPagin').style.background = 'rgba(242, 120, 92, 0.5)'
})

document.querySelector('.centerPagin').addEventListener('click', function() {
    sliderLine.style.left = 0 + 'px';
    document.querySelector('#centerPagin').style.background = '#F2785C'
    document.querySelector('#leftPagin').style.background = 'rgba(242, 120, 92, 0.5)'
    document.querySelector('#rightPagin').style.background = 'rgba(242, 120, 92, 0.5)'
})

document.querySelector('.rightPagin').addEventListener('click', function() {
    sliderLine.style.left = -860 + 'px';
    document.querySelector('#leftPagin').style.background = 'rgba(242, 120, 92, 0.5)'
    document.querySelector('#rightPagin').style.background = '#F2785C'
    document.querySelector('#centerPagin').style.background = 'rgba(242, 120, 92, 0.5)'
})


// Мобильный сладйер..........
let offset = 0;
const sliderLineMobile = document.querySelector('.mobileImg');

document.querySelector('.leftPagin').addEventListener('click', function() {
    sliderLineMobile.style.left = 360 + 'px';
    document.querySelector('#leftPagin').style.background = ' #F2785C'
    document.querySelector('#rightPagin').style.background = 'rgba(242, 120, 92, 0.5)'
    document.querySelector('#centerPagin').style.background = 'rgba(242, 120, 92, 0.5)'
})

document.querySelector('.centerPagin').addEventListener('click', function() {
    sliderLineMobile.style.left = 0 + 'px';
    document.querySelector('#centerPagin').style.background = ' #F2785C'
    document.querySelector('#leftPagin').style.background = 'rgba(242, 120, 92, 0.5)'
    document.querySelector('#rightPagin').style.background = 'rgba(242, 120, 92, 0.5)'
})

document.querySelector('.rightPagin').addEventListener('click', function() {
    sliderLineMobile.style.left = -360 + 'px';
    document.querySelector('#leftPagin').style.background = 'rgba(242, 120, 92, 0.5)'
    document.querySelector('#rightPagin').style.background = ' #F2785C'
    document.querySelector('#centerPagin').style.background = 'rgba(242, 120, 92, 0.5)'
})

document.querySelector('.rightArrow').addEventListener('click', function() {
    offset -= 360
    if(offset < -360) {
        offset = 360
        document.querySelector('#leftPagin').style.background = '#F2785C'
        document.querySelector('#rightPagin').style.background = 'rgba(242, 120, 92, 0.5)'
        document.querySelector('#centerPagin').style.background = 'rgba(242, 120, 92, 0.5)'
    }else if(offset < 0) {
        document.querySelector('#leftPagin').style.background = 'rgba(242, 120, 92, 0.5)'
        document.querySelector('#rightPagin').style.background = '#F2785C'
        document.querySelector('#centerPagin').style.background = 'rgba(242, 120, 92, 0.5)'
    }else{
        document.querySelector('#centerPagin').style.background = '#F2785C'
        document.querySelector('#leftPagin').style.background = 'rgba(242, 120, 92, 0.5)'
        document.querySelector('#rightPagin').style.background = 'rgba(242, 120, 92, 0.5)'
    }
    sliderLineMobile.style.left = offset +'px'
})

document.querySelector('.leftArrow').addEventListener('click', function() {
    offset += 360
    if(offset > 360) {
        offset = -360
        document.querySelector('#leftPagin').style.background = 'rgba(242, 120, 92, 0.5)'
        document.querySelector('#rightPagin').style.background = '#F2785C'
        document.querySelector('#centerPagin').style.background = 'rgba(242, 120, 92, 0.5)'
    }else if(offset > 0) {
        document.querySelector('#leftPagin').style.background = '#F2785C'
        document.querySelector('#rightPagin').style.background = 'rgba(242, 120, 92, 0.5)'
        document.querySelector('#centerPagin').style.background = 'rgba(242, 120, 92, 0.5)'
    }else{
        document.querySelector('#centerPagin').style.background = '#F2785C'
        document.querySelector('#leftPagin').style.background = 'rgba(242, 120, 92, 0.5)'
        document.querySelector('#rightPagin').style.background = 'rgba(242, 120, 92, 0.5)'
    }
    sliderLineMobile.style.left = offset +'px'
})





// Pop Up..............

document.querySelector('.loginButton').addEventListener('click', function(el){
    document.querySelector('.popUp').classList.toggle('hidden')
    if(document.querySelector('.registerPopUp').classList.contains('hidden') === false) {
        document.querySelector('.registerPopUp').classList.add('hidden')
    }
})

document.getElementById('account').addEventListener('click', function(el){
    document.querySelector('.popUp').classList.toggle('hidden')
    if(document.querySelector('.registerPopUp').classList.contains('hidden') === false) {
        document.querySelector('.registerPopUp').classList.add('hidden')
    }
})

document.querySelector('.realRegister').addEventListener('click', function(el){
    document.querySelector('.popUp').classList.add('hidden')
    document.querySelector('.registerPopUp').classList.remove('hidden')
})

document.querySelector('.realLogIn').addEventListener('click', function(el){
    document.querySelector('.popUp').classList.toggle('hidden')
    if(document.querySelector('.registerPopUp').classList.contains('hidden') === false) {
        document.querySelector('.registerPopUp').classList.add('hidden')
    }
})


document.addEventListener('click', function(el) {
    if (el.target.id != 'loginButton' && el.target.id != 'need' && el.target.id != 'leftBorder' && el.target.id != 'rightBorder' && el.target.id != 'leftBorder' && el.target.id != 'realRegister' && el.target.id != 'realLogIn' && el.target.id != 'account') {
        document.querySelector('.registerPopUp').classList.add('hidden')
        document.querySelector('.popUp').classList.add('hidden')
    }
})