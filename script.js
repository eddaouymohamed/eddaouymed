var menu = document.getElementById('menu-links');
var icons = document.getElementById('mobile-icons');
var spanIcons = document.getElementsByTagName('span');
for (let i = 0; i < spanIcons.length; i++) {
    spanIcons[i].style.position = 'relative';
}
icons.onclick = function() {
    if (menu.classList.contains('menu-d-flex')) {
        menu.classList.remove('menu-d-flex');



    } else
        menu.classList.add('menu-d-flex');
    for (let i = 0; i < spanIcons.length; i++) {
        spanIcons[i].style.position = 'relative';
        if (spanIcons[0].classList.contains('spanclass1'))
            spanIcons[0].classList.remove('spanclass1');
        else
            spanIcons[0].classList.add('spanclass1');

        if (spanIcons[1].classList.contains('spanclass2'))
            spanIcons[1].classList.remove('spanclass2');
        else
            spanIcons[1].classList.add('spanclass2');

        if (spanIcons[2].classList.contains('spanclass3'))
            spanIcons[2].classList.remove('spanclass3');
        else
            spanIcons[2].classList.add('spanclass3');
    }

}
var btn1 = document.querySelector('.btn-color1');
var btn2 = document.querySelector('.btn-color2');
btn2.onmouseenter = function() {
    if (btn1.classList.contains('change-btn-color')) {
        btn1.classList.remove('change-btn-color');
    } else
        btn1.classList.add('change-btn-color');
}
btn2.onmouseleave = function() {
    if (btn1.classList.contains('change-btn-color')) {
        btn1.classList.remove('change-btn-color');
    } else
        btn1.classList.add('change-btn-color');
}
var btn11 = document.querySelector('.btn-color11');
var btn22 = document.querySelector('.btn-color22');
btn22.onmouseenter = function() {
    if (btn11.classList.contains('change-btn-color')) {
        btn11.classList.remove('change-btn-color');
    } else
        btn11.classList.add('change-btn-color');
}
btn22.onmouseleave = function() {
    if (btn11.classList.contains('change-btn-color')) {
        btn11.classList.remove('change-btn-color');
    } else
        btn11.classList.add('change-btn-color');
}


// console.log(btn1);

// starat of expereiencev
// var h1 = document.getElementsByClassName('f-title');
// h1.forEach(element => {
//     var elet = element.style;
//     elet.textTransform = 'capitalize';
//     elet.letterSpacing = '2px';
//     elet.fontWeight = '600';
//     elet.fontSize = '22px';


// });
// end of experience


//start of contact form
// var form = document.getElementById('contact-form');
// JavaScript

function ajusterLargeur() {
    if (window.innerWidth > 767) {
        document.getElementById('contact-form').classList.add('nome_width60');
    } else {
        document.getElementById('contact-form').classList.remove('nome_width60');
    }
}

// Appeler la fonction au chargement de la page et à chaque redimensionnement de la fenêtre
window.addEventListener('load', ajusterLargeur);
window.addEventListener('resize', ajusterLargeur);


//end of contact form