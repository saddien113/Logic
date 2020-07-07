function kalimat(n) {
    var kata = n.split(" ");
    var vocal = ["a", "i", "u", "e", "o"]
    var tes = []
    var hasil = []

//    console.log(vocal)
//    console.log(kata[i].charAt(0))

    for (i = 0; i < kata.length; i++) {
        //console.log(kata[i].charAt(0)) // apakah true
        if (vocal.includes(kata[i].charAt(0))) {
            tes.push(kata[i])

        } else { // apakah salah
            tes.push(kata[i].slice(1)+kata[i].charAt(0) + "nyo")
            // tes.push(kata[i].slice(1).concat ("nyo"))

        }
        
        var hasil = tes.join(" ");
        
    }
    // console.log(tes)
    console.log(hasil)
}

kalimat('ibu pergi ke pasar bersama aku')
