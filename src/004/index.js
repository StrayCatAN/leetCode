// import _ from 'lodash';
// import R from 'ramda';

export default [
  (m, n) => {
    const arr = m.concat(n);
    arr.sort((a,b)=>a-b);
    if (arr.length % 2 !== 0) {
      return arr[arr.length / 2 - 0.5];
    }
    const len = Math.floor((arr.length - 1) / 2);
    return (arr[len + 1] + arr[len]) / 2;
  },
  // (m, n) => {
  //   return R.add(m, n)
  // }
];
// m.cancat(n).length%2 === 0 ？;
