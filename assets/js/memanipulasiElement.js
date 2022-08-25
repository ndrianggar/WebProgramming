/**
 * 
 * Memanipulasi Konten Elemen
Dengan JavaScript juga kita dapat mengubah konten yang ada di dalam HTML. Konten pada elemen disimpan di dalam properti innerHTML (konten dalam bentuk HTML) atau innerText (konten dalam bentuk Teks). Hasilnya, dalam memanipulasi konten kita dapat melakukannya dengan mengubah nilai dari properti tersebut.

let caption = document.querySelector("#caption");
caption.innerHTML = '<em>Tiga Anak Kucing</em>'

Lihat perubahan terjadi pada caption gambar! Sekarang caption gambar tampak miring karena kita membungkus teks dalam elemen emphasize. Kita dapat memberikan nilai HTML pada konten elemen dengan menggunakan properti innerHTML.

Berbeda ketika kita menggunakan innerText, nilai apapun yang terdapat pada properti ini adalah merupakan sebuah teks. Sehingga walaupun kita menginisialisasi teks yang merupakan sebuah tag html, maka teks tersebut akan tampil apa adanya tanpa terformat sebagai HTML.

caption.innerText = "<em>Tiga Anak Kucing</em>";

Jadi pastikan kita tidak salah menggunakan properti ketika ingin mengubah konten dari elemen.
 */