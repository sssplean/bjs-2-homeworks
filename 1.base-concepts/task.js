"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = Math.pow(b, 2) - 4 * a * c;
  if (d < 0) {
    arr = [];
  }
  if (d == 0) {
    let x = -b / (2 * a);
    arr = [x];
  }
  if (d > 0) {
    let x1 = (-b + Math.sqrt(d)) / (2 * a);
    let x2 = (-b - Math.sqrt(d)) / (2 * a);
    arr = [x1, x2];
  }
  return arr;
}

﻿
function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if (isNaN(parseInt(percent)) == true ||
      isNaN(parseInt(contribution)) == true  ||
      isNaN(parseInt(amount)) == true  ||
      isNaN(parseInt(countMonths)) == true) {
    return false;
  }
  let P = parseInt(percent) / 100 / 12;
  let S = parseInt(amount) - parseInt(contribution);
  let n = parseInt(countMonths);
  let monthlyPayment = S * (P + (P / (Math.pow((1 + P), n) - 1)));
  let totalAmount = monthlyPayment * n;
  return Number(totalAmount.toFixed(2));
}
