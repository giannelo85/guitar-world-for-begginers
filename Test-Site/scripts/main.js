let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/guitar-slide.jpg') {
      myImage.setAttribute ('src','images/guitar-wall.jpg');
    } else {
      myImage.setAttribute ('src','images/guitar-slide.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Guitars are cool, ' + myName;
  }
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Guitars are cool, ' + storedName;
  }


myButton.onclick = function() {
  setUserName();
}







