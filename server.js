const db = require('./db/connection');
const apiRoutes = require('./routes/apiRoutes');
const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();

//Express middleware
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use('/api', apiRoutes);


db.query(`SELECT * FROM candidates`, (err,rows)=> {
    console.log(rows);
});



//Create a candidate
const sql = `INSERT INTO candidates (id, first_name, last_name,industry_connected)
            VALUES(?,?,?,?)`;
const params = [1, 'Ronald', 'Firbank', 1];

db.query(sql,params, (err,result)=>{
    if (err) {
        console.log(err);
    }
    console.log(result);
});






// // Start server after DB connection
// db.connect(err => {
//   if (err) throw err;
//   console.log('Database connected.');
//   app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
//   });
// });


//Default response for any other request (Not Found)
app.use((req,res)=> {
    res.status(404).end();
});


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});