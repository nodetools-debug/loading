function startLoadingAnimation(loadingArray, intervalTime) {
  let index = 0;

  setInterval(() => {
    console.clear();
    console.log('loading: ' + loadingArray[index]);
    index = (index + 1) % loadingArray.length;
  }, intervalTime);
}

function processArray(array) {
  array.forEach((element, index) => {
    if (element === 3) {
      console.log('Skipping element ' + element);
    } else {
      console.log('Element ' + element + ' at index ' + index);
    }
  });
}
const loadingArray = ['-','/','|','\\'];
startLoadingAnimation(loadingArray, 100);

const array = [1, 2, 3, 4, 5];
processArray(array);
