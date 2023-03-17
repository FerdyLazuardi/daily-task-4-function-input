const {
  sum,
  sum2
} = require("./penjumlahan")
const {
  min,
  min2
} = require("./pengurangan")
const {
  kali
} = require("./perkalian")
const {
  bagi
} = require("./pembagian")
const {
  totalHarga
} = require("./totalHarga")

// console.log(sum(300, 10))
// console.log(min(300, 10))

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Soal nomer 1 Penjumlahan\nAngka pertama yang ingin dijumlahkan = ', (num1) => {
  rl.question('Angka kedua yang ingin dijumlahkan = ', (num2) => {
    const total = sum(parseInt(num1), parseInt(num2))
    console.log(`Hasil penjumlahan angka 1 dan angka 2 adalah = ${total}`);

    console.log(`===================`)
    rl.question('Soal nomer 2 Pengurangan\nAngka pertama yang ingin dikurangi = ', (num1) => {
      rl.question('Angka kedua yang ingin dikurangi = ', (num2) => {
        const total = min(parseInt(num1), parseInt(num2))
        console.log(`Hasil pengurangan angka 1 dan angka 2 adalah = ${total}`);

        console.log(`===================`)
        rl.question('Soal nomer 3 Perkalian\nAngka pertama yang ingin dikali = ', (num1) => {
          rl.question('Angka kedua yang ingin dikali = ', (num2) => {
            const total = kali(parseInt(num1), parseInt(num2))
            console.log(`Hasil perkalian angka 1 dan angka 2 adalah = ${total}`);

            console.log(`===================`)
            rl.question('Soal nomer 4 Pembagian\nAngka pertama yang ingin dibagi = ', (num1) => {
              rl.question('Angka kedua yang ingin dibagi = ', (num2) => {
                const total = bagi(parseInt(num1), parseInt(num2))
                console.log(`Hasil pembagian angka 1 dan angka 2 adalah = ${total}`);

                console.log(`===================`)
                console.log(`Soal nomer 5 total harga`)
                rl.question('Harga barang satuannya = ', (price) => {
                  rl.question('jumlah barangnya berapa = ', (qty) => {
                    const total = totalHarga(parseInt(price), parseInt(qty))
                    console.log(`Total harganya adalah = ${total.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}`);

                    rl.close();
                  });
                });
              });
            });
          });
        });
      });
    });
  });
});


// console.log(`=============`)


// rl.question('Harga barang satuannya ', (price) => {
//   rl.question('jumlah barangnya berapa ', (qty) => {
//     const total = totalHarga(parseInt(price), parseInt(qty))
//     console.log(`Total harganya adalah ${total}`);
//     rl.close();
//   });
// });