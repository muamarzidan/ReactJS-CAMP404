const mongoose = require('mongoose');
const uri = "mongodb+srv://Z1d4nlearnmongo:Z1d4nlearnmongo@cluster0.k8ezs.mongodb.net/?retryWrites=true&w=majority";

const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

mongoose.connect(uri, clientOptions)
    .then(() => {
        console.log("Connected to MongoDB!");
    })
    .catch((error) => {
        console.error("Error connecting to MongoDB:", error);
    });

process.on('SIGINT', () => {
    mongoose.disconnect()
        .then(() => {
            console.log('Disconnected from MongoDB due to application termination');
            process.exit(0);
        })
        .catch((err) => {
            console.error('Error disconnecting from MongoDB:', err);
            process.exit(1);
        });
});

//query to connect localhost mongodb
// const mongoose = require('mongoose');

// mongoose.connect('mongodb://0.0.0.0:27017/db_buku');
// const db = mongoose.connection;

// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//     console.log('Database connected');
// });

