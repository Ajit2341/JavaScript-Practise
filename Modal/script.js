'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay')

const btnCloseModal = document.querySelector(".close-modal")
const btnsOpenModal = document.querySelectorAll(".show-modal");
//console.log(btnsOpenModal);

const closeModal = function () {
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}

const showModal = function () {
    modal.classList.remove("hidden")
    overlay.classList.remove("hidden")
}

for (let i = 0; i < btnsOpenModal.length; i++) {
    btnsOpenModal[i].addEventListener('click',showModal)
}
// for (let i = 0; i < btnsOpenModal.length; i++) {
//     btnsOpenModal[i].addEventListener('click', function () {
//         console.log('Button clicked');
//         modal.classList.remove("hidden")
//         overlay.classList.remove("hidden")
//     });
    
// }

btnCloseModal.addEventListener('click', closeModal)

/*
btnCloseModal.addEventListener('click', closeModal()) <== this will directly execute the function in JS as soon as the loading happens we want it on click
*/
// btnCloseModal.addEventListener('click', function () {

//     // modal.classList.add('hidden')
//     // overlay.classList.add('hidden')
// })

overlay.addEventListener('click', closeModal)
// overlay.addEventListener('click', function () {
//     modal.classList.add('hidden')
//     overlay.classList.add('hidden')
// })