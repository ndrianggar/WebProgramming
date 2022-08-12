
/**
 Assignment Operator
Dari contoh kode yang kita gunakan sebelumnya sebenarnya kita sudah menggunakan assignment operator. Operator ini digunakan untuk memberikan nilai pada variabel.

Pada dasarnya operator ini adalah tanda sama dengan (=), di mana tanda ini digunakan untuk menginisialisasi nilai pada variabel. Variabel yang akan diberikan nilai ditempatkan pada sebelah kiri dan nilainya ditempatkan pada sebelah kanan (nilai dapat berupa variabel lain atau nilai primitif, array, atau objek). Di antara keduanya terdapat operator assignment.
-----------------------
*/

let x = 10;
let y = 5

x += y;

console.log(x);

x += y; // artinya -> x = x + y;
x -= y; // artinya -> x = x - y;
x *= y; // artinya -> x = x * y;
x /= y; // artinya -> x = x / y;
x %= y; // artinya -> x = x % y;

/**
 * Operator Komparasi
Sekarang kita sudah mengetahui bagaimana cara menyimpan nilai pada sebuah variabel, array, ataupun objek. Nah, selanjutnya kita akan belajar mengenai operator komparasi sebagai logika dasar dalam membandingkan nilai pada JavaScript.

Terdapat serangkaian karakter khusus yang disebut dengan operator pembanding/komparasi yang dapat mengevaluasi dan membandingkan dua nilai. Berikut daftar operator dan fungsinya:

Operator

Fungsi

==

Membandingkan kedua nilai apakah sama. (Tidak Identik)

!=

Membandingkan kedua nilai apakah tidak sama. (Tidak Identik)

===

Membandingkan kedua nilai apakah identik.

!==

Membandingkan kedua nilai apakah tidak identik.

>

Membandingkan dua nilai apakah nilai pertama lebih besar dari nilai kedua.

>=

Membandingkan dua nilai apakah nilai pertama lebih besar atau sama dengan dari nilai kedua.

<

Membandingkan dua nilai apakah nilai pertama lebih kecil dari nilai kedua.

<=

Membandingkan dua nilai apakah nilai pertama lebih kecil dari atau sama dengan nilai kedua.

Ketika kita melakukan perbandingan antara dua nilai, JavaScript akan mengevaluasi kedua nilai tersebut dan akan mengembalikan boolean dengan nilai hasil perbandingan tersebut, baik false, atau true. Berikut contohnya:
 * 
 * Perbedaan antara “sama” dan “Identik”
Dalam operator komparasi di JavaScript, hal yang menjadi sedikit “tricky” adalah membedakan antara “sama” (==) dan “identik” (===).

Kita sudah mengetahui bahwa setiap nilai pasti memiliki tipe data baik itu number, string atau boolean. Contohnya sebuah string “10” dan number 10 merupakan hal yang serupa, tetapi keduanya tidak benar-benar sama.

Hal inilah yang membedakan antara sama dan identik pada JavaScript. Jika kita ingin membandingkan hanya dari kesamaan nilainya kita bisa gunakan == tapi jika kita ingin membandingkan dengan memperhatikan tipe datanya kita gunakan ===.
 */

const aString = '10';
const aNumber = 10

console.log(aString == aNumber) // true, karena nilainya sama-sama 10
console.log(aString === aNumber) // false, karena walaupun nilainya sama, tetapi tipe datanya berbeda


/*

Logical Operators
Terdapat beberapa operator lain yang dapat kita gunakan untuk menetapkan logika yang lebih kompleks, yakni dengan logical operators. Dengan logical operator kita dapat menggunakan kombinasi dari dua nilai boolean atau bahkan lebih dalam menetapkan logika.

Pada JavaScript terdapat tiga buah karakter khusus yang berfungsi sebagai logical operator, berikut macam-macam logical operator dan fungsinya:

Operator

Deskripsi

&&

Operator dan (and), logika akan menghasilkan true apabila semua kondisi terpenuhi (bernilai true).

||

Operator atau (or), logika akan menghasilkan true apabila ada salah satu kondisi terpenuhi (bernilai true).

!

Operator tidak (not), digunakan untuk membalikan suatu kondisi.

Berikut contoh penerapannya pada JavaScript:
*/

let a = 10;
let b = 12;

console.log(a < b);
console.log(a > b);

 

/* AND operator */
console.log(a < 15 && b > 10); // (true && true) -> true
console.log(a > 15 && b > 10); // (false && true) -> false

/* OR operator */
console.log(a < 15 || b > 10); // (true || true) -> true
console.log(a > 15 || b > 10); // (false || true) -> true


/* NOT operator */
console.log(!(a < 15)); // !(true) -> false
console.log(!(a < 15 && b > 10)); // !(true && true) -> !(true) -> false
