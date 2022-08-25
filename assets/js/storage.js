const CACHE_KEY = "calculation_history";


function checkForStorage() {
    return typeof(Storage) !== "undefined"
   }

  function putHistory(data) {
    if (checkForStorage()) {
        let historyData = null;
        if (localStorage.getItem(CACHE_KEY) === null) {
            historyData = [];
        } else {
            historyData = JSON.parse(localStorage.getItem(CACHE_KEY));
        }
  
        historyData.unshift(data);
  
        if (historyData.length > 5) {
            historyData.pop();
        }
  
        localStorage.setItem(CACHE_KEY, JSON.stringify(historyData));
    }
 }

 /**
  * 
  * Banyak istilah kode yang asing pada kode di atas. Mari kita lihat satu per satu.

Yang pertama fungsi JSON.parse() yang mana digunakan untuk mengubah nilai objek dalam bentuk string kembali pada bentuk objek JavaScript. Kemudian JSON.stringify() digunakan untuk mengubah objek JavaScript ke dalam bentuk String. Seperti yang kita tahu, bahwa localStorage hanya dapat menyimpan data primitif seperti string, sehingga kita perlu mengubah objek ke dalam bentuk string jika ingin menyimpan ke dalam localStorage.

JSON sendiri adalah singkatan dari JavaScript Object Notation. JSON merupakan format yang sering digunakan dalam pertukaran data. Saat ini JSON banyak diandalkan karena formatnya berbasis teks dan relatif mudah dibaca.

Lalu di sana juga ada fungsi unshift(), fungsi ini digunakan untuk menambahkan nilai baru pada array yang ditempatkan pada awal index. Fungsi ini juga mengembalikan nilai panjang array setelah ditambahkan dengan nilai baru.

Fungsi pop() di atas merupakan fungsi untuk menghapus nilai index terakhir pada array, sehingga ukuran array historyData tidak akan pernah lebih dari 5. Hal ini kita terapkan agar riwayat kalkulasi yang muncul adalah lima hasil kalkulasi terakhir oleh pengguna.

Dari sini kita bisa mengetahui bahwa data yang disimpan pada localStorage adalah array yang berisi beberapa objek hasil kalkulasi, kemudian array tersebut diubah menjadi string. Struktur data tersebut dalam bentuk string nampak seperti ini:
  */


function showHistory() {
    if (checkForStorage()) {
        return JSON.parse(localStorage.getItem(CACHE_KEY)) || [];
    } else {
        return [];
    }
 }


 function renderHistory() {
    const historyData = showHistory();
    let historyList = document.querySelector("#historyList");
    historyList.innerHTML = "";
  
    for (let history of historyData) {
        let row = document.createElement('tr');
        row.innerHTML = "<td>" + history.firstNumber + "</td>";
        row.innerHTML += "<td>" + history.operator + "</td>";
        row.innerHTML += "<td>" + history.secondNumber + "</td>";
        row.innerHTML += "<td>" + history.result + "</td>";
  
        historyList.appendChild(row);
    }
    renderHistory();
 }
  
