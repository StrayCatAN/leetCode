// import _ from 'lodash';
// import R from 'ramda';

export default [
  // (m, n) => m + n,
  // (m, n) => {
  //   return R.add(m, n)
  // }
  (nums, target) => {
    const arr = nums;
    const returnArray = [];
    for (let i = 0; i < arr.length; +i) {
      for (let j = i + 1; j <= arr.length; +j) {
        const num = arr[i] + arr[j];
        if (num === target) {
          returnArray.push(i, j);
        }
      }
    }
    return returnArray;
  },
];

