/**
 * Property/Method

Description

history

Sebagai navigasi (go back atau go forward) histori URL browser.

location

Mendapatkan URL yang terdapat pada address bar browser.

alert()

Menampilkan dialog alert dengan pesan dan tombol “ok”.

close()

Menutup tab yang aktif.

confirm()

Menampilkan dialog dengan pesan dan tombol “ok” dan “cancel”. Method ini akan mengembalikan nilai boolean sesuai response dari pengguna.

prompt()

Menampilkan dialog dengan pesan dan teks input. Method ini akan mengembalikan nilai string sesuai response dari pengguna.

Dalam mengakses properti dan method pada objek window, kita bisa menuliskannya secara langsung tanpa harus memanggil objek window-nya terlebih dahulu. Karena properti dan method pada window bersifat global.

// mengakses method alert() pada window
window.alert("Hello Browser!")
 
// Kita juga bisa mengaksesnya seperti ini
alert("Hello Browser!")
Untuk menggunakan properti dan method yang terdapat pada objek window, tentu syntax JavaScript perlu dijalankan pada browser atau dituliskan pada console browser. Kita tidak bisa mencobanya pada glot.io seperti saat belajar sintaks dasar JavaScript, karena glot.io sejatinya tidak memiliki objek window dan proses kompilasi JavaScript dilakukan menggunakan teknologi nodeJS. Sehingga jika kita mencoba menjalankan syntax JavaScript yang berhubungan dengan browser objek akan menyebabkan eror “not defined”.


 * 
 * 
 * 
 */
// mengakses method alert() pada window
window.alert("Hello Browser!")
 
// Kita juga bisa mengaksesnya seperti ini
alert("Hello Browser!")



/**
 * 
 * Setelah mengetahui cara penggunaan browser object dan dasar-dasar JavaScript, dengan menggabungkan pengetahuan keduanya, kita bisa membuat program sederhana. Contohnya kita bisa membuat program yang interaktif dengan menggunakan prompt() untuk mendapatkan nilai input dari pengguna dan alert() untuk menampilkan pesan.

Silakan tuliskan kode berikut ini dan jalankan pada console browser.
 * 
 * 
 */

const firstName = prompt("Siapa nama depanmu?");
const lastName = prompt("Siapa nama belakangmu?");
const language = prompt("Bisa berbahasa apa?");
const confirmation = confirm("apakah sudah semua dimasukkan?" )
 
const user = {
   name: {
       first: firstName,
       last: lastName,
   },
   language: language
};
 
if (user.language === "English") {
   alert("Nice to meet you " + user.name.first + " " + user.name.last + "!");
} else if (user.language === "French") {
   alert("Ravi de vous rencontrer " + user.name.first + " " + user.name.last + "!");
} else if (user.language === "Japanese") {
   alert("Hajimemashite, " + user.name.first + " " + user.name.last + "!");
} else {
   alert("Senang bertemu dengan Anda " + user.name.first + " " + user.name.last + "!");
}