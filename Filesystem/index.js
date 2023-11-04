const fs = require('fs');
// const { resolve } = require('path');
     
const data = fs.readFileSync('notes.txt', 'UTF-8');
console.log(data);

/* Method ini menerima tiga argumen yakni: lokasi berkas, encoding, dan callback function yang akan terpanggil bila berkas berhasil/gagal diakses */
// const fileReadCallback = (error, data) => {
//   if(error) {
//     console.log('Gagal membaca berkas');
//     return;
//   }
//   console.log(data);
// };

// fs.readFile(resolve(__dirname, 'notes.txt'), 'UTF-8', fileReadCallback);