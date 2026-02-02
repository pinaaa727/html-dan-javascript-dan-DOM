// jadi ini adalah komen, jadi bebas aja

// variabel dengan let
let nama = "Muhammad Rifki Andriansyah";

// tampilkan data
console.log(nama);

// kita ubah nilai variabel nama
nama = "Vina Mustika Sari";
console.log(nama);

// 2. variabel dengan var
var namaDepan = "Muhammad";
console.log(namaDepan);
namaDepan = "Vina";
console.log(namaDepan);

// Kelakukan dari let
let namaBelakang = "Andriansyah";
{
    namaBelakang = "Sari";
    console.log(namaBelakang);
}
console.log(namaBelakang);

// kelakuan dari var
var namaTengah = "Rifki";
{
    var namaTengah = "Mustika";
    console.log(namaTengah);
}
console.log(namaTengah);

// kasus khusus tanpa keyword akan jadi var
gorengan = "Bala-bala";
{
    gorengan = "Combro";
}
console.log(gorengan);

// 3. const

const TTL = "09 September 2025";
console.log(TTL);
// TTL = "11 Maret 2054"; gak boleh dilakukan karena sudah janji kostan

