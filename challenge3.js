function romawi(n) {
    var number = [1, 4, 5, 9, 10,40,50,90,100,400,500,900,1000];
    var romawi = ["I", "IV", "V", "IX", "X","XL","L","XC","C","CD","D","CM","M"];
    var result = '';
    for (var i = 12; i >= 0; i--) {
      if (n >= number[i]) {
            result += romawi[i]; 
            // result = result + romawi[i] //atau menggunakan ini
            n -= number[i];
        }
    }
   return result
}



// console.log("script testing untuk konversi romawi \n");
// console.log("input | expected |result");
// console.log("------|----------|--------");
// console.log("4     | IV       |", romawi(4));
// console.log("9     | IX       |", romawi(9));
// console.log("13    | XIII     |", romawi(13));
// console.log("1453  | MCDLIII  |", romawi(1453));
// console.log("1646  | MDCXLVI  |", romawi(1646));
// console.log("1646  | MDCXLVI  |", romawi(5));


// function romawi(n) {
//     //var number = [1, 4, 5, 9, 10,40,50,90,100,400,500,900,1000];
//     //var romawi = ["I", "IV", "V", "IX", "X","XL","L","XC","C","CD","D","CM","M"];
//     var number = [10,9,5,4,1]
//     var romawi = ["X","IX","V","IV","I"]
//     var result = '';
//     for (var i = 0; i <= 5; i++) {
//         while (n >= number[i]) {
//             result += romawi[i]; 
//             n -= number[i];
//         }
//     }
//     return result
// }



// console.log("script testing untuk konversi romawi \n");
// console.log("input | expected |result");
// console.log("------|----------|--------");
// console.log("4     | IV       |", romawi(4));
// console.log("9     | IX       |", romawi(9));
// console.log("13    | XIII     |", romawi(13));
// console.log("1453  | MCDLIII  |", romawi(1453));
// console.log("1646  | MDCXLVI  |", romawi(1646));
console.log("1646  | MDCXLVI  |", romawi(5));