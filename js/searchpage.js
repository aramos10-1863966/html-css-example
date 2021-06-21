'use strict';
/* global d3 */

// fetches the schools to be rendered in the results container
function fetchSchools() {
    d3.csv('dataset/WA_college_data.csv')
    .then(data => {
      return filterArray(data);
    })
    .then(data => {
      renderAllCards(data);
    })
    .catch(error => {
      renderError(error);
    })
  }
  
  // takes in an object and renders an individual card in the DOM 
  function renderEachCard(object) {
    let container = document.querySelector('.filtered_container');
    let divElem = document.createElement('div');
    divElem.classList.add('card');
    let pElem = document.createElement('p');
    let linkElem = document.createElement('a');
    let img = document.createElement('img');
    pElem.textContent = object.INSTNM;
    let link = object.INSTURL.substring(0,5);
    if(link != 'https') {
      linkElem.href = 'https://' + object.INSTURL;
    } else {
      linkElem.href = object.INSTURL;
    }
    linkElem.target = '_blank';
    img.src = 'img/college.png';
    divElem.appendChild(img);
    divElem.appendChild(pElem);
    linkElem.appendChild(divElem);
    container.appendChild(linkElem);
  }
  
  // filters an array using user input, returns the filtered array
  function filterArray(data) {
    let newData = data;
    let returnedData = [];
    let count = 0;
    let city = document.querySelector('#city');
    let state = document.querySelector('#state');
    let school = document.querySelector('#school');

    if(city.value != '') {
        newData = newData.filter((college) => {
            return college.CITY.toLowerCase() === city.value.toLowerCase();
        })
        count = count + 1;
    }

    console.log(newData);

    if(state.value != '') {
        newData = newData.filter((college) => {
            return college.STABBR.toLowerCase() === state.value.toLowerCase();
        })
        count = count + 1;
    }

    if(school.value != '') {
        newData = newData.filter((college) => {
            return college.INSTNM.toLowerCase() === school.value.toLowerCase();
        })
        count = count + 1;
    }
    
    console.log(newData);

    if(count > 0) {
        returnedData = newData;
    }

    return returnedData;
  }
  
  
  // takes in an array of objects and renders a card for each object
  function renderAllCards(data) {
    let results = document.querySelector('.filtered_container');
    results.innerHTML = '';
    
    for(let college of data) {
      renderEachCard(college);
    }
  
    if(data.length == 0) {
      renderError(new Error('No results found'));
    }
  }
  
  
  // renders an error message for the user
  function renderError(error) {
    let pElem = document.createElement('p');
    let results = document.querySelector('.filtered_container');
    let msg = error.message;
    pElem.innerHTML = msg;
    pElem.classList.add('alert');
    pElem.classList.add('alert-danger');
    results.appendChild(pElem);
  }
  
  
  //an event listener that calls fetchSchools() when the submit button is clicked
  let submitButton = document.querySelector('button#submit');
  submitButton.addEventListener('click', function(event) {
    event.preventDefault();
    fetchSchools();
  })

const hamburger = document.getElementById("hamburger-menu");
const navUL = document.getElementById("nav-ul");

hamburger.addEventListener("click", () => {
  navUL.classList.toggle("show");
})