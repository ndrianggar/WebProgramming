/** Mode Strict pada JavaScript
Seringkali dalam menggunakan JavaScript, kode yang telah ditulis tidak dapat dieksekusi dengan baik pada situs web. Salah satu penyebabnya adalah penulisan yang salah atau menggunakan sintaksis yang buruk.  Untuk menangani hal ini, telah disediakan mode Strict (Strict Mode) sejak versi ECMAScript 5. Hampir semua versi browser terbaru telah mendukung penggunaan mode ini. Internet Explorer mulai versi 10, Firefox mulai versi 4, Google Chrome mulai versi 13, Safari mulai versi 5.1 dan Opera mulai versi 12.

Apa itu mode Strict
Mode Strict adalah mode yang memaksakan penulisan program JavaScript yang baik dan aman. Hal ini memastikan tidak terjadinya kegagalan dalam menjalankan kode akibat penulisan script yang buruk, dan juga mencegah timbulnya bug. 

Berikut beberapa hal yang tidak dapat dilakukan jika menggunakan mode Strict:

Menggunakan variabel sebelum mendeklarasikannya. 
Menghapus variabel, function dan argumen.
Menggunakan definisi object property yang berulang.
Menggunakan definisi parameter pada function yang berulang.
Menulis pada property jenis readonly.
Menggunakan angka dengan penulisan oktal.
Menulis pada property jenis get.
Menghapus undelete property seperti pada property jenis prototype.
Menggunakan string “eval” dan “argument” sebagai variabel.
Menggunakan statement jenis with.
Menggunakan future keyword reserve seperti implements, interface, package, private, protected, public, static, yield.

Cara aktivasi mode Strict
Jalankan mode Strict dengan cara menuliskan perintah “use strict” pada awal sebuah script atau function. Perintah ditulis dalam bentuk tulisan biasa dan bukan merupakan statemen. Jika perintah ditulis di awal sebuah script maka akan berlaku untuk secara global. Jika ditulis di dalam function maka tidak akan berlaku secara global.

Contoh penggunaan mode Strict secara global (ditulis di awal script)

"use strict";
x = 9;       // ini akan dianggap error karena variabel belum dideklarasikan
showAngka();   // ini akan dianggap error karena function belum dideklarasikan
 
function showAngka() {
  var x = 9;
  alert(x);
}
Contoh penggunaan mode Strict di dalam function 

x = 9;       // ini tidak dianggap error karena tidak kena mode Strict
showAngka();   // ini tidak dianggap error karena tidak kena mode Strict
 
function showAngka() {
  “use strict”;
   x = 9; // ini akan dianggap error karena variabel belum dideklarasikan
  alert(x);
}*/

"use strict";

var x= 9;
