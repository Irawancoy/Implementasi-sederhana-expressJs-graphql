const { GraphQLString, GraphQLObjectType } = require('graphql');
const Karyawan = require('../../models/karyawanModel.js');
const karyawanTypes = require('../types/karyawanTypes.js');

// Mendefinisikan RootMutation untuk operasi mutasi pada GraphQL
const RootMutation = new GraphQLObjectType({
   name: 'RootMutationType',
   fields: {
      // Mutasi untuk menambahkan karyawan baru
      addKaryawan: {
         type: karyawanTypes, // Tipe data yang akan dikembalikan
         args: {
            // Definisi argumen yang diperlukan untuk menambahkan karyawan
            nama: { type: GraphQLString },
            jabatan: { type: GraphQLString },
            email: { type: GraphQLString },
            telepon: { type: GraphQLString },
            posisi: { type: GraphQLString }
         },
         async resolve(parent, args) {
            try {
               // Membuat instance baru dari model Karyawan
               let karyawan = new Karyawan({
                  _id: args._id,
                  nama: args.nama,
                  jabatan: args.jabatan,
                  email: args.email,
                  telepon: args.telepon,
                  posisi: args.posisi
               });
               // Menyimpan karyawan baru ke database
               return await karyawan.save();
            } catch (error) {
               // Menangani error jika penyimpanan gagal
               throw new Error('Error adding karyawan');
            }
         }
      },
      // Mutasi untuk memperbarui data karyawan
      updateKaryawan: {
         type: karyawanTypes, // Tipe data yang akan dikembalikan
         args: {
            // Definisi argumen yang diperlukan untuk memperbarui karyawan
            _id: { type: GraphQLString },
            nama: { type: GraphQLString },
            jabatan: { type: GraphQLString },
            email: { type: GraphQLString },
            telepon: { type: GraphQLString },
            posisi: { type: GraphQLString }
         },
         async resolve(parent, args) {
            try {
               // Mengupdate data karyawan berdasarkan ID dan mengembalikan data yang diperbarui
               return await Karyawan.findByIdAndUpdate(args._id, args, { new: true });
            } catch (error) {
               // Menangani error jika update gagal
               throw new Error('Error updating karyawan');
            }
         }
      },
      // Mutasi untuk menghapus karyawan berdasarkan ID
      deleteKaryawan: {
         type: karyawanTypes, // Tipe data yang akan dikembalikan
         args: { _id: { type: GraphQLString } }, // Argumen untuk ID karyawan yang akan dihapus
         async resolve(parent, args) {
            console.log('Deleting karyawan with ID:', args._id); // Log ID karyawan yang akan dihapus
            try {
               const result = await Karyawan.findByIdAndDelete(args._id); // Menghapus karyawan berdasarkan ID
               console.log('Delete result:', result); // Log hasil penghapusan
               if (!result) {
                  // Jika tidak ada karyawan dengan ID tersebut
                  throw new Error('No karyawan found with the given ID');
               }
               return result; // Mengembalikan data karyawan yang dihapus
            } catch (error) {
               console.error('Error details:', error); // Log detail error
               throw new Error('Error deleting karyawan'); // Menangani error jika penghapusan gagal
            }
         }
      }
   }
});

module.exports = RootMutation; // Mengekspor RootMutation agar dapat digunakan di file lain
