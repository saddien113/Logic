function prime(x) {
    for (i = 2; i <= Math.sqrt(x); i++) {
        if (x % i === 0) {
            return false;
        }
    }
    return true
}

console.log(prime(4))

// function isPrime(n) {
//     var count = 2
//     var index = 0
    
//     while (index < n) {     
//         if (prime(count) == true) {
//             index++
//         }
//         count++
//     }
//     return count -1
// }

//atau menggunakan

// function isPrime(n) {
//     var count = 2;
//     var index = 0;

//     while (index < n) {
//         var prime = true;
//         for (var i = 2; i <= Math.sqrt(count); i++)
//             if (count % i == 0)
//                 prime = false
//         if (prime) {
//             index++
//         }
//         count++
//     }
//     return count - 1
// }

// console.log(isPrime(4))
// console.log(isPrime(6))
// console.log(isPrime(37786))


// function isPrime(n) {
//     var count = 2;
//     var index = 0;
//     while (index < n) {
//         var prime = true;
//         for (var i = 2; i <= Math.sqrt(count); i++)
//             if (count % i == 0)
//                 prime = false

//         if (prime) {

//             index++
//         }
//         count++
//     }
//     return count - 1
// }
// console.log(isPrime(3))
// console.log(isPrime(4))
// console.log(isPrime(10000))
// console.log(isPrime(37786))