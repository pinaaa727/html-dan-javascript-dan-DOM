let dataString = "data String";
console.log(dataString);

// 1. escaping string (\' \" \\ \n \t \b \f")
let data1 = 'rifki berkata"hallo sayang"';
console.log(data1);
let data2 = "vina berkata \"hallo juga sayang\"";
console.log(data2);
let data3 = "rifki berjalan-jalan di pantai. \nkeren sekali";
console.log(data3);

//literasi string (template string)
let namaDepan = "rifki";
let namaBelakang = "Andriansyah";
let umur = 7;
let namaLengkap = umur + " " + namaDepan + " " + namaBelakang; // menjadi masyalah
console.log(namaLengkap);

// lebiih elehan supaya ini tidak bikin error
let biodata = `${namaDepan} ${namaBelakang} dengan umur ${umur}`;
console.log(biodata);