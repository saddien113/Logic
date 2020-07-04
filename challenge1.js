function sum(){ // declare variable
    var j = 0; // declare isi untuk sum adalah 0
    for(var a = 0; a < arguments.length; a++){ // declare variable a dengan isi 0 digunakan untuk loopin
        j = j + arguments[a]; //for adalah untuk looping 
        // j += arguments[a] //Atau menggunakan 
    } // argument.length digunakan untuk mengetahui panjang variable
    console.log(j) // untuk ditampilkan
}

sum(1,2,7); //4 sum ini adalah kumpulan variabel 
sum(1,4);
// sum(11);
// sum(10,3,6,7,9);
