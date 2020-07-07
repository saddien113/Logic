// var i = 1; //ada 2 variabel i dan k
// while (i <= 10) {
//   k = i * 3
//   if (k % 6 === 0 && k % 5 === 0) { //melakukan penyaringan ke rule 1
//     console.log('kaskus')
//   } else if (k % 6 === 0) { //melakukan penyaringan ke rule 2
//     console.log('kus')
//   } else if (k % 5 === 0) { //melakukan penyaringan ke rule 3
//     console.log('kas')
//   } else { //bila tidak lolos ke 3 rule maka print k
//     console.log(k)
//   }
//   i++; // i dilakukan penambahan untuk looping 
// }

// atau
// for (i = 1; i <= 10; i++) {

//   k = i * 3
//   if (k % 6 === 0 && k % 5 === 0) {
//     console.log('kaskus')
//   } else if (k % 6 === 0) {
//     console.log('kus')
//   } else if (k % 5 === 0) {
//     console.log('kas')
//   }
//   else {
//   console.log(k)
//   }
// }

//atau

function deretkaskus(n) {
  var j = []
  for (var i = 1; i <= 10; i++) {
      k = i * 3;
      if (k % 6 === 0 && k % 5 === 0) {
          j.push('kaskus');
      } else if (k % 6 === 0) {
          j.push('kus');
      } else if (k % 5 === 0) {
          j.push('kas');
      } else {
          j.push(k);
      }
  }
  return j
}


console.log(deretkaskus(10));