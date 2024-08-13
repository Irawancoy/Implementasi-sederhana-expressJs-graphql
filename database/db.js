// Memuat variabel lingkungan dari file .env ke dalam process.env
require('dotenv').config();

const mongoose = require('mongoose');

// Fungsi untuk menghubungkan ke MongoDB
const connectMongoDB = async () => {
   try {
      // Menghubungkan ke MongoDB menggunakan URL dari variabel lingkungan
      await mongoose.connect(process.env.MONGO_URL, {
         useNewUrlParser: true, // Menggunakan parser URL baru (opsi penting untuk menghindari deprecation warnings)
         useUnifiedTopology: true, // Menggunakan mesin manajemen koneksi MongoDB yang baru
      });
      console.log('MongoDB connected'); // Menampilkan pesan sukses saat koneksi berhasil
   } catch (error) {
      console.error('MongoDB connection failed'); // Menampilkan pesan error jika koneksi gagal
      console.error(error); // Menampilkan detail error untuk debugging
   }
}
   
// Mengekspor fungsi connectMongoDB agar dapat digunakan di file lain
module.exports = connectMongoDB;


