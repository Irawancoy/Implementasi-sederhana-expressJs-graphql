const { GraphQLObjectType, GraphQLString, GraphQLInt } = require('graphql');

// Mendefinisikan tipe GraphQL untuk Karyawan
const KaryawanTypes = new GraphQLObjectType({
   name: 'Karyawan', // Nama tipe GraphQL
   fields: () => ({
      // Definisi field yang ada pada tipe Karyawan
      _id: { type: GraphQLString }, 
      nama: { type: GraphQLString }, 
      jabatan: { type: GraphQLString }, 
      email: { type: GraphQLString },
      telepon: { type: GraphQLString },
      posisi: { type: GraphQLString } 
   })
});
   
module.exports = KaryawanTypes; // Mengekspor tipe Karyawan agar dapat digunakan di schema GraphQL


