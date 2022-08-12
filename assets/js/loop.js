console.log("=============Latihan dengan Array==================")

const kandang = ["ayam kampung", "ayam negeri", "ayam merah", 2,4.5]

console.log(kandang)

nomor = 0

for(let i=0; i < kandang.length; i++){
    console.log(++nomor+ " ", kandang[i])
}

//For of loop
/*
Dengan for..of, nilai tiap array akan diinisialisasi pada variabel baru yang kita tentukan pada tiap proses looping-nya.
 Jumlah proses looping nya pun akan menyesuaikan dengan ukuran dari array. Sederhananya seperti kita melakukan perintah “Hei JavaScript! Lakukan perulangan pada myArray, akses tiap nilainya dan simpan pada variabel arrayItem”. Pada proses looping kita gunakan variabel arrayItem untuk mengakses tiap nilai dari item myArray.
*/

let myArray = ["Harry", "Ron", "Hermione", "Tom"];

for(const arrayItem of myArray) {
    console.log(arrayItem)
}


/*
Pada operator aritmatika juga terdapat operator increment (++) dan decrement (--). Operator increment dan decrement digunakan untuk menambahkan atau mengurangi nilai 1 pada nilai variabel yang ada sekarang.

Operator ini dapat dituliskan sebelum atau sesudah variabel, tetapi hal tersebut bukan berarti sama. Berikut ketentuannya:

Jika dituliskan setelah variabel (x++), statement akan menghasilkan nilai variabel sebelum ditingkatkan nilainya.
Jika dituliskan sebelum variabel (++x), statement akan menghasilkan nilai variabel setelah ditingkatkan nilainya.
Lebih jelasnya berikut contoh kode dalam penerapan operator tersebut, perhatikan hasil yang di dapat.
*/

console.log("=============Latihan dengan objek==================")

let manusia = {
        nama: {
            firstname:"Hendri",
            lastname:"Anggara"
        },
        age:12,
        matkul:{
            diniyyah:["sirah nabi", "fiqih", "ushul fiqh"],
            duniawiyyah:["programmer", "design", "english"]          
        }

}

console.log(manusia.matkul, manusia.nama.firstname)


/**
 * Operator

Fungsi

==

Membandingkan kedua nilai apakah sama. (Tidak Identik)

!=

Membandingkan kedua nilai apakah tidak sama. (Tidak Identik)

===

Membandingkan kedua nilai apakah identik.

const aString = '10';
const aNumber = 10

console.log(aString == aNumber) // true, karena nilainya sama-sama 10
console.log(aString === aNumber) // false, karena walaupun nilainya sama, tetapi tipe datanya berbeda

output
true
false

-----------------------
*/