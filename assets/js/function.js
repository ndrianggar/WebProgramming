/**
 * Function
Tanpa kita sadari sebenarnya kita sudah menggunakan sebuah fungsi pada contoh kode yang ada sebelumnya. console.log() (lebih tepatnya pada log()) merupakan sebuah function yang berfungsi untuk menampilkan data pada console browser. Tapi sebenarnya apa itu function? Bagaimana ia bisa bekerja?

Function atau fungsi merupakan potongan kecil kode yang tidak akan dieksekusi sebelum dipanggil. Contoh lain fungsi JavaScript yang sudah ada pada browser adalah alert(). Ia bertujuan untuk menampilkan pesan dalam bentuk pop up dialog. Fungsi tersebut sudah ada pada browser dan akan muncul hanya ketika kita menggunakan/memanggilnya dengan alert().

Atau dalam arti lain, kita dapat berfikir bahwa function merupakan sebuah variabel yang berisi block logika, dan block logika tersebut akan dieksekusi ketika variabelnya dipanggil.

Semua fungsi memiliki struktur yang sama. Nama fungsi selalu diikuti dengan tanda kurung (parentheses) tanpa spasi, lalu terdapat sepasang kurung kurawal yang berisi logika dari fungsi tersebut.

Terkadang di dalam tanda kurung kita membutuhkan sebuah informasi tambahan yang disebut dengan arguments. Argument merupakan data yang digunakan pada fungsi yang dapat mempengaruhi perilaku dari fungsinya tersebut. Contoh, fungsi alert() dapat menerima argument string yang digunakan untuk menampilkan teks pada dialog.
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * Terdapat dua tipe fungsi pada JavaScript, yakni native function dan custom function.

Native function merupakan fungsi yang sudah terdapat pada JavaScript atau Browser sehingga kita tidak perlu membuat hanya tinggal menggunakan saja. Contohnya alert(), confirm(), Date(), parseInt() dll. Sebenarnya terdapat ratusan native function yang tersedia.

Custom function merupakan fungsi yang kita buat sendiri, tentu custom function dibuat menyesuaikan kebutuhan kita. Untuk membuat sebuah custom function, kita perlu menuliskan keyword function dilanjutkan dengan menuliskan seluruh struktur fungsinya.
 * 
 * 
 * 
 */

function greeting() {
    console.log("Good Morning!")
}

greeting();

/* output
Good Morning!
*/

function greeting(name, language) {
    if(language === "English") {
        console.log("Good Morning " + name + "!");
    } else if (language === "French") {
        console.log("Bonjour " + name + "!");
    } else {
        console.log("Selamat Pagi " + name + "!");
    }


}
greeting("hendri", "English")


function multiply(a, b) {
    return a * b;
}

let result = multiply(10, 2)
console.log(result)
