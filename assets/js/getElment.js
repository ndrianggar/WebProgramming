/**
 * 
 * Mendapatkan Elemen
Untuk mengakses elemen melalui DOM, kita gunakan properti dari objek window yang dinamakan dengan document. Objek document merepresentasikan dokumen dari HTML atau keseluruhan halaman yang terlihat pada jendela browser. Jika kita lihat nilai dari objek document pada browser console akan tampak seperti ini:

Pada gambar di atas kita bisa lihat bahwa nilai dari document merupakan struktur HTML dari halaman yang ditampilkan, di mana terdapat root element <html> yang di dalamnya ada elemen <head> dan <body>.

Meskipun nilai objek document terlihat hanya seperti struktur HTML saja, namun objek document memiliki beberapa standar properti dan method yang digunakan untuk mengakses koleksi elemen di dalamnya. Contohnya kita dapat mendapatkan elemen <head> yang diakses melalui properti head dari objek document.

const head = document.head;

Begitu juga sama halnya dengan mendapatkan elemen <body> dengan properti body seperti berikut. 

const body = document.body;

Kedua properties tersebut baik head atau body akan mengembalikan elemen dalam bentuk objek yang sama seperti document. Namun bila kita ingin mengakses elemen secara spesifik, kita harus menggunakan method yang disediakan pada objek document seperti:

Method
---------------------------
DENGAN ID

getElementById()

document.getElementById(“display”);

Mengembalikan elemen yang memiliki nilai id “display”.
---------------------------

---------------------------
DENGAN NAME

getElementsByName()

document.getElementsByName(“button”)

Mengembalikan banyak elemen (NodeList) yang memiliki attribute name dengan nilai “button”.
---------------------------

---------------------------
DENGAN CLASSNAME
getElementsByClassName()

document.getElementsByClassName(“button”)

Mengembalikan kumpulan yang memiliki class "button" dalam bentuk HTMLCollection.
---------------------------

---------------------------
DENGAN TAGNAME 
getElementsByTagName()

document.getElementsByTagName(“div”)

Mengembalikan banyak <div> elemen berupa HTMLCollection
---------------------------

---------------------------
DENGAN QUERY SELECTOR
querySelector()

document.querySelector(“.button”);

Mengembalikan elemen pertama yang menerapkan class “button”.
---------------------------

---------------------------
DENGAN QUERY SELECTORALL

querySelectorAll()

document.querySelectorAll(“.button”);

Mengembalikan kumpulan Node beserta turunannya (NodeList) dengan class “button”.
---------------------------


Pada method di atas ada yang mengembalikan nilai HTML elemen secara tunggal, ada juga yang mengembalikan banyak nilai HTML elemen yang biasa disebut HTMLCollection. Contohnya kita gunakan method document.querySelector(".button"); untuk mendapatkan nilai button. Jadi, nilai yang didapatkan adalah elemen tunggal yang menerapkan class “button” pertama kali.



Untuk mendapatkan seluruh elemen yang memiliki class “button” kita gunakan method document.querySelectorAll(".button"); sehingga method tersebut akan mengembalikan banyak elemen dengan class button.



Karena HTMLCollection mirip seperti array yang dapat menampung banyak data di dalamnya, HTMLCollection juga memiliki karakteristik mirip seperti array. HTMLCollection memiliki properti length untuk mendapatkan jumlah elemen yang ditampung. Untuk mengakses nilai individual elemennya menggunakan indexing.20191206210449bb374b7f549b3d77ea9f2bc3f9af204e.gif

Kita juga dapat melakukan perulangan menggunakan for of pada HTMLCollection:

for (let item of buttons) {
  console.log(item);
}

Dalam menggunakan method querySelector() tentu kita menggunakan query dalam menentukan target elemen. Untuk menargetkan elemen berdasarkan attribute class, kita gunakan tanda “.”, sedangkan jika kita menargetkan dengan menggunakan id, gunakan tanda “#”.

Selain querySelector() masih terdapat method lain yang sudah disebutkan sebelumnya untuk mendapatkan elemen secara spesifik, Anda bisa mencoba sendiri method tersebut pada console browser, dan carilah perbedaan fungsi dari masing-masing method-nya.
 */