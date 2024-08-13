const { GraphQLSchema } = require('graphql');
const RootQuery = require('./queries/query'); // Mengimpor RootQuery yang mendefinisikan query utama
const RootMutation = require('./mutation/mutation'); // Mengimpor RootMutation yang mendefinisikan mutasi

// Membuat instance schema GraphQL dengan query dan mutation
const schema = new GraphQLSchema({
   query: RootQuery, // Menetapkan RootQuery sebagai query utama untuk schema
   mutation: RootMutation // Menetapkan RootMutation sebagai mutasi utama untuk schema
});
   
module.exports = schema; // Mengekspor schema agar dapat digunakan di server GraphQL



