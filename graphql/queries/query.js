const { GraphQLList, GraphQLObjectType } = require('graphql');
const KaryawanType = require('../types/karyawanTypes'); 
const Karyawan = require('../../models/karyawanModel.js'); 

// Mendefinisikan RootQuery untuk query GraphQL
const RootQuery = new GraphQLObjectType({
   name: 'RootQueryType', // Nama tipe query utama
   fields: {
      // Query untuk mengambil daftar semua karyawan
      karyawans: {
         type: new GraphQLList(KaryawanType), // Tipe data yang akan dikembalikan (daftar karyawan)
         async resolve(parent, args) {
            console.log('Fetching karyawans...'); // Log saat mulai mengambil data
            try {
               // Mengambil semua data karyawan dari database
               const karyawans = await Karyawan.find({});
               console.log('Fetched karyawans:', karyawans); // Log hasil data karyawan yang diambil
               return karyawans; // Mengembalikan data karyawan
            } catch (error) {
               console.error('Error fetching karyawans:', error); // Log error jika pengambilan data gagal
               throw new Error('Error fetching karyawans'); // Menangani error dan mengembalikan pesan error
            }
         }
      }
   }
});

module.exports = RootQuery; // Mengekspor RootQuery agar dapat digunakan dalam schema GraphQL





