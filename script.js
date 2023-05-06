'strict mode';

const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

//We use queryselectorAll when selecting more than one elements that match the group.
const showModal = document.querySelectorAll('.show-modal');
//This will log in a Node list. lets loop through

//FIRST HECTIC METHOD FOR OPENING THE POPUP
// for (let i = 0; i < showModal.length; i++) {
//   console.log(showModal[i].textContent);
// }
//Lets create an event listener for when we click the buttons
// for (let i = 0; i < showModal.length; i++) {
//   showModal[i].addEventListener('click', function () {
//     console.log(`button Clicked by ${i}`);
//     //when we click a button, we want the popup to show, hence remove the hidden class from it. Here's how
//     modal.classList.remove('hidden'); //WORKS!!
//     overlay.classList.remove('hidden'); //WORKS!!
//   });

// };

//CREATE A FUNCTION
const openModalFunc = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
//CALL THE FUNCTION ON THE CLICK EVENT
for (let i = 0; i < showModal.length; i++) {
  showModal[i].addEventListener('click', openModalFunc);
}

//FIRST HECTIC METHOD FOR CLOSING THE POPUP
//   closeModal.addEventListener('click', function () {
//     //when we click a button, we want the popup to be hidden, hence add the hidden class from it. Here's how
//     modal.classList.add('hidden');
//     overlay.classList.add('hidden');
//   });

//   overlay.addEventListener('click', function () {
//     //when we click a button, we want the popup to be hidden, hence add the hidden class from it. Here's how
//     modal.classList.add('hidden');
//     overlay.classList.add('hidden');
//   });

//INSTEAD OF HAVING THESE TWO FUNCTIONS ABOVE, WE CAN JUST CREATE A SEPARATE FUNCTION AND CREATE AN EVENT CALL FOR THE OVERLAY AND THE CLOSE MODAL.

//CREATE A FUNCTION
const closeModalFunc = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
//CALL THE FUNCTION ON THE CLICK EVENT
overlay.addEventListener('click', closeModalFunc);
closeModal.addEventListener('click', closeModalFunc);

//Major take away is that you can create several functions and then add pass them into multiple listener methods
