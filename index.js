"use strict";
// const o: any = {
//   name: '姓名',
//   age: 18,
//   sex: '女',
//   school: '大连科技学院'
// };
const a = [
    { id: 1, name: '姓名1' },
    { id: 2, name: '姓名2' },
    { id: 3, name: '姓名3' }
];
const result = a.find(v => v.id === 2);
console.log(result);
