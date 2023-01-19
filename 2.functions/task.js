function getArrayParams(...arr) {
  // 1-й Вариант:
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  const length = arr.length;// Т.к. длину массива нужно было бы вычислять дважды решил создать отдельную переменную. На самом деле, не до конца понимаю - насколько это целесообразно.
  for (let i = 0; i < length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
    sum += arr[i];
  }
  const avg = Number((sum / length).toFixed(2));
  // 2-й Вариант:
  /*
  const min = Math.min.apply(null, arr);
  const max = Math.max.apply(null, arr);
  const sum = arr.reduce(function(accumulator, a) {return accumulator + a;}, 0);
  const avg = Number((sum / arr.length).toFixed(2));
  */
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  const sum = arr.reduce(function(accumulator, a) {return accumulator + a;}, 0);
  return sum;
}

function differenceMaxMinWorker(...arr) {
  const min = Math.min.apply(null, arr);
  const max = Math.max.apply(null, arr);
  if (max == -Infinity) {
    return 0;
  } else {
    return max - min;
  }
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }
  }
  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  const length = arr.length;
  if (length === 0) {
    return 0;
  } else {
    for (let i = 0; i < length; i++) {
      if (arr[i] % 2 === 0) {
        sumEvenElement += arr[i];
        countEvenElement++;
      }
    }
  }
  return sumEvenElement / countEvenElement;
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++) {
    const workerResult = func(...arrOfArr[i]);
    if (workerResult > maxWorkerResult) {
      maxWorkerResult = workerResult;
    }
  }
  return maxWorkerResult;
}
