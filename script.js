console.log('script.js is sourced');

var garage = [];

var addCar = function () {
  console.log('in addCar');

  //get user input
  var year = document.getElementById('yearIn').value;
  var make = document.getElementById('makeIn').value;
  var model = document.getElementById('modelIn').value;
  var picURL = document.getElementById('picURLIn').value;
  var description = document.getElementById('descriptionIn').value;

  //create car object
  var newCar = {
    year: year,
    make: make,
    model: model,
    picURL: picURL,
    description: description,
  };//end newCar

  //Create/style favorite car class ***********************************
  if (newCar.make == 'Buick' && newCar.model == 'Park Ave') {
    document.getElementById().addClass(forbesBestCar);
  }

  if (newCar.year == '' || newCar.make == '' || newCar.model == '') {
    alert('Please add at least a year, make and model!');
  } else {
    clearFields();
    garage.push(newCar);
    displayCars();
    addCarCount();
  }

}; //end addCar

var displayCars = function () {
  //empty our div element
  document.getElementById('allCars').innerHTML = '';

  //for each car in the garage, add a list item w/ year, make and model
  for (var i = 0; i < garage.length; i++) {
    //car info (year, make, model, number of cars parked in the garage)
    var carInfo = '<div class="aCarInTheGarage"><h2>' + garage [i].year + ' ' + garage [i].make + ''
    + garage [i].model + '</h2><img src="' + garage[i].picURL + '">' +
    '<br><button class="prevNext" onClick="carousel()">< prev</button>' + ' ' +
    '<button class="prevNext" onClick="carousel()">next ></button>'
    + '<p>' + garage[i].description +
    ' <button class="takeout" onClick="takeOut(' + i + ');">Take me out for a drive</button></p>'
    + '<p id="carCountText"></p></div>';

    //append car info to output div
    document.getElementById('allCars').innerHTML += carInfo;
    addCarCount();
  } // end for
};//end displayCars

var takeOut = function (index) {
  // console.log("in takeOut", index);
  garage.splice(index, 1);

  // update display the garage
  displayCars();
  document.getElementById('carCount').innerHTML = "You don't have any cars in the garage.";
}; //end takeOut
//clear all of the input fields
var clearFields = function () {
  // console.log("in clearFields");
  document.getElementById('yearIn').value = '';
  document.getElementById('makeIn').value = '';
  document.getElementById('modelIn').value = '';
  document.getElementById('picURLIn').value = '';
  document.getElementById('descriptionIn').value = '';
}; //end clearFields
// display the amount of cars in the garage
var addCarCount = function () {
    //car count paragraph
    var carCountText = '<p>' + 'The garage has ' + garage.length + ' car(s) in it.' + '</p>';

    //add car count to DOM
    document.getElementById('carCount').innerHTML = carCountText;
  };

var carousel = function () {
  console.log('in carousel');
  ;
};//end carousel
