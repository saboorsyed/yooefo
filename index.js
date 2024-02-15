// function brandDetailsPopup(event,brand) {
//     const popup = document.querySelector('.pop-up-container');
//     debugger
//     if(popup.style.display = 'none'){
//         popup.style.display = 'fixed';
//         popup.style.position = 'absolute'
//         // popup.style.top = (event.clientY - 280) + 'px'

//     }
//     else{
//         popup.style.display = 'none';
//         popup.style.position = 'absolute'
//     }
// }
// function closeUp() {
//     const popup = document.querySelector('.pop-up-container');
//     popup.style.display = 'none';
// }
function pageOpen() {
    window.location = 'bookings-page.html';
}
function addressPage(){
    window.location = 'bookings-page-7.html'
}
function statusPage(){
    window.location = 'bookings-page-7.html'
}
function addAddress(){
    window.location = 'bookings-page-2.html'
}
function addAddress2(){
    window.location = 'bookings-page.html'
}
function paymentPage(){
    window.location = 'bookings-page-5.html'
}
function homepage(){
    window.location = 'stores.html'
}
function nextFlow(pageno){
    if(pageno === 2){
        window.location = '2-brand-selection.html';
    }
    else if(pageno === 3){
        window.location = '3-model-selection.html';
    }
    else if(pageno === 4){
        window.location = '4-services-selection.html';
    }
    else if(pageno === 5){
        window.location = '5-delivery-type-selection.html'
    }
    else if(pageno === 6){
        window.location = '../stores.html'
    }
}
//for service popover
function selectService(event){
    debugger
    let selectedEL = event.target;
    let unselctedElement = document.getElementByClassName('model-option');
    unselctedElement.classList.add("selected-service");
}
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl);
});
//stores.html carousal
function scrollLeftt() {
    let container = document.getElementById('carousel-items');
    container.scrollBy({
      left: -240, // Adjust the value as needed
      behavior: 'smooth'
    });
  }

 function scrollRight() {
    let container = document.getElementById('carousel-items');
    container.scrollBy({
      left: 240, // Adjust the value as needed
      behavior: 'smooth'
    });
  }