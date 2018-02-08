// import _ from 'lodash';
import R from 'ramda';

export default [
  (m) => {
    // 切割成无数个片段
    // 片段中是否有重复，有重复的丢掉
    // 比较符合条件片段的长度
    let endIndex = 1;
    const strArray = m.split('');
    const len = strArray.length;
    let noRepeatArrLen = null;
    const ifRrepeat = (item) => {
      const obj = {};
      for (let i = 0; i < item.length; i += 1) {
        if (!obj[item[i]]) {
          // 不重复
          obj[item[i]] = 1;
        } else {
          return 0;
        }
      }
      if (noRepeatArrLen < item.length) {
        noRepeatArrLen = item.length;
      }
    };
    strArray.map((x, index) => {
      let arr;
      while (endIndex <= len) {
        arr = strArray.slice(index, endIndex);
        endIndex += 1;
        ifRrepeat(arr)
      }
      endIndex = index + 2;
    });
    return noRepeatArrLen;
  },
  (m) => {
    const obj = {};
    // 直接比较重复字母之间的不重复片段长度
    let left = 0;
    return m.split('').reduce((max, item, index) => {
      left = obj[item] >= left ? obj[item] + 1 : left;
      obj[item] = index;
      return Math.max(max, index - left + 1);
    }, 0);
  },
];