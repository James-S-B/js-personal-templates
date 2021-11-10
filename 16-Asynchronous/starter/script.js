'use strict';

// const btn = document.querySelector('.btn-country');
// const countriesContainer = document.querySelector('.countries');

// ///////////////////////////////////////
// const whereAmI = function (lat, lng) {
//   fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//     .then(res => {
//       if (!res.ok) throw new Error(`probalem with geocoding ${res.status}`);
//       return res.json();
//     })
//     .then(data => {
//       console.log(data);
//       console.log(`You are in ${data.city}, ${data.country}`);
//     })
//     .catch(err => console.error(`${err.message}`));
// };

// whereAmI(52.508, 13.381);

// console.log('test start');
// setTimeout(() => console.log('0 sec timer'), 0);
// Promise.resolve('resolved primis 1').then(res => console.log(res));
// Promise.resolve('resolved primis 2').then(res => {
//   for (let i = 0; i < 30000000; i++) {}
//   console.log(res);
// });
// console.log('test end');

const letteryPromise = new Promise(function (resolve, reject) {
  if (Math.random() >= 0.5) {
    resolve('you Win');
  } else {
    reject('you Lose');
  }
});
