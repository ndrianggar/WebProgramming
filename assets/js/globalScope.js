/**
 * Variable Scope
Sejauh ini kita sudah mengenal function. Ada satu hal lagi yang harus kita tahu mengenai dasar JavaScript, yakni scoping variable. Ada banyak keadaan di mana kita membutuhkan variabel untuk diakses di seluruh script yang kita buat. Tetapi ada juga keadaan di mana kita ingin variabel tersebut hanya dapat diakses pada cakupan fungsi dan fungsi turunannya saja.

Variabel yang dapat di akses dari seluruh script disebut dengan “globally scoped,” sementara variabel yang hanya dapat diakses hanya pada function tertentu disebut dengan “locally scoped.”

Variabel JavaScript menggunakan fungsi untuk mengelola cakupannya, Jika variabel didefinisikan di luar fungsi, maka variabel akan bersifat global. Jika variabel didefinisikan di dalam fungsi, maka variabel bersifat lokal dan cakupannya hanya pada fungsi tersebut atau turunannya.

Untuk lebih jelasnya, berikut variabel yang dapat diakses dalam sebuah fungsi:

Variabel argumen dari fungsinya.
Lokal variabel yang didefinisikan pada fungsinya.
Variabel dari induk fungsinya.
Global variabel.
 * 
 * 
 */

// global variable, dapat diakses pada parent() dan child()
const a = 'a'; 
 
function parent() {
    // local variable, dapat diakses pada parent() dan child(), tetapi tidak dapat diakses diluar dari fungsi tersebut.
    const b = 'b'; 
    
    function child() {
        // local variable, dapat diakses hanya pada fungsi child().
        const c = 'c';
    }
}


///contoh kasus

function multiDimensi(num){
   var jumlah = num + num
      return jumlah
    
    }  
    
    let jumlah = 20 // tidak dicetak
    multiDimensi(4);
    
    console.log(jumlah)


    /**Penjelasan
     * Mungkin kita berharap nilai total akan tetap 9. Mengingat variabel total pada fungsi multiDimensi, seharusnya tidak akan berpengaruh untuk kode di luar dari fungsi tersebut. Hal ini bisa terjadi karena pada fungsi multiDimensi() kita tidak menetapkan variabel total sebagai cakupan lokal, kita tidak menggunakan keyword const, let, atau var ketika mendeklarasikan variabel total pada fungsi multiDimensi() sehingga variabel total menjadi global.

        || Perlu kita perhatikan bahwa, ketika kita lupa menuliskan keyword let, const atau var pada script ketika membuat sebuah variabel, maka variabel tersebut akan menjadi global.

       Sebisa mungkin kita harus menghindari pembuatan variabel global, karena variabel global dapat diakses pada seluruh script yang kita tuliskan. Semakin banyak variabel global yang kita tuliskan, semakin tinggi kemungkinan variabel tabrakan (collision) terjadi.
     * 
     * 
     */