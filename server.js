const express = require('express'); 
const { graphqlHTTP } = require('express-graphql'); // Mengimpor middleware graphqlHTTP dari express-graphql
const schema = require('./graphql/schema'); // Mengimpor schema GraphQL
const connectMongoDB = require('./database/db'); // Mengimpor fungsi untuk menghubungkan ke MongoDB

const app = express(); // Membuat instance aplikasi Express

connectMongoDB(); // Menghubungkan aplikasi ke MongoDB

// Menetapkan middleware GraphQL pada endpoint /graphql
app.use('/graphql', graphqlHTTP({
   schema, // Menetapkan schema GraphQL untuk digunakan oleh middleware
   graphiql: true // Mengaktifkan antarmuka GraphiQL untuk pengujian query
}));

// Menjalankan server pada port 3000
app.listen(3000, () => {
   console.log('Server running on port 3000'); // Log bahwa server sedang berjalan
});




