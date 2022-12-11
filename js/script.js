// Copyright (c) 2022 Allen Li All rights reserved
//
// Created by: Allen Li
// Created on: Oct 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2OR-Assignment-4-HTML/sw.js", {
    scope: "/ICS2OR-Assignment-4-HTML/",
  })
}



;("use strict")

if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2OR-Assignment-4-HTML/sw.js", {
    scope: "/ICS2OR-Assignment-4-HTML/",
  })
}

/**
 * This function displays an alert.
 * Words
 */
function calculate() {
  let userSize = document.getElementById("size").value
  let userTopings = document.getElementById("topings").value

  let sizePrice = 0
  let topingPrice = 0

  if (userSize == "Small") {
    sizePrice = 30.0
  } else if (userSize == "Medium") {
    sizePrice = 35.0
  } else if (userSize == "Large") {
    sizePrice = 40.0
  } else if (userSize == "Extra-Large") {
    sizePrice = 43.0
  } else {
    document.getElementById("ChocolateCakeSize").innerHTML = "Error"
  }

  if (userTopings == "Caramel") {
    topingPrice = 3.0
  } else if (userTopings == "Rich-Chocolate-Sauce") {
    topingPrice = 10.0
  } else if (userTopings == "Ice-Cream-Scoop") {
    topingPrice = 5.0
  } else {
    document.getElementById("Topings").innerHTML = "Error"
  }

  let totalPrice = sizePrice + topingPrice

  document.getElementById("total").innerHTML =
    "Your total will be $" + totalPrice + "! Thanks for consult!"
}
