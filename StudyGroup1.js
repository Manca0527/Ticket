console.log("---Tiket Masuk Zoo---")
let pengunjung = [{nama: "Judy", umur: 4}, {nama: "joko", umur: 35}, {nama: "sela", umur: 65}, {nama: "bell", umur: 10}];

// mememtukan harga tiket normal
let hargatiket = 50000;


// looping 
for (let i = 0; i < pengunjung.length; i++) {
    let namapengunjung = pengunjung[i].nama;
    let umur = pengunjung [i].umur;
    let pesan = "";
 

    // percabangan
    if (umur < 5) {
        pesan = "free! untuk balita.";
    }else if (umur <= 12) {
        pesan = "diskon 50%! harga tiket: ", (hargatiket / 2);
    }else if (umur >= 60) {
        pesan = "diskon 30%! harga tiket:", (hargatiket * 0.7);
    }else{
        pesan = "harga normal:", hargatiket;
    }

    console.log("nama pengunjung    :", namapengunjung);
    console.log("umur               :", umur, "tahun");
    console.log("keterangan         :", pesan);

}