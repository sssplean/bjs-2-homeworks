"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  const D = Math.pow(b, 2) - 4 * a * c;
  if (D == 0) {
    const x = -b / (2 * a);
    arr = [x];
  }
  if (D > 0) {
    const x1 = (-b + Math.sqrt(D)) / (2 * a);
    const x2 = (-b - Math.sqrt(D)) / (2 * a);
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
  const P = parseInt(percent) / 100 / 12;
  const S = parseInt(amount) - parseInt(contribution);
  const n = parseInt(countMonths);
  const monthlyPayment = S * (P + (P / (Math.pow((1 + P), n) - 1)));
  const totalAmount = monthlyPayment * n;
  return Number(totalAmount.toFixed(2));
}
calculateTotalMortgage('10%', 0, '50000 р.', '12 мес.')
