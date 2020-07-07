function angka(n) {
    var j = n.toString()
    var total = 1


    if (j.length > 1) {  
        for (i = 0; i < j.length; i++) {
           total *= j[i]
       //console.log(total)

        }
        return angka(total)
    } 
        return n
}


console.log(angka(7812))
// console.log(angka(999))
// console.log(angka(3))