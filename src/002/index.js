// import _ from 'lodash';
// import R from 'ramda';

export default [
  // (m, n) => m + n,
  // (m, n) => {
  //   return R.add(m, n)
  // }
  (target1, target2) => {
    const arr1 = target1.reverse();
    const arr2 = target2.reverse();
    const returnArray = [];
    let num = Number(arr1.join('')) + Number(arr2.join(''));
    num = String(num).split('');
    for (let i = 0; i < num.length; i++) {
      returnArray.push(Number(num[i]));
    }
    console.log(returnArray.reverse());
    return returnArray;
  },
];


