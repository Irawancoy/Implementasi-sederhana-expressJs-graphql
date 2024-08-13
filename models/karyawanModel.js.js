const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Mendefinisikan schema untuk koleksi Karyawan
const KaryawanSchema = new Schema({
    nama: String, 
    jabatan: String, 
    email: String, 
    telepon: String, 
    posisi: String 
});

// Membuat model Karyawan berdasarkan schema yang telah didefinisikan
const Karyawan = mongoose.model('karyawan', KaryawanSchema);

// Mengekspor model Karyawan agar dapat digunakan di file lain
module.exports = Karyawan;


