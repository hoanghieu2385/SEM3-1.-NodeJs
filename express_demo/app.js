// const express = require('express');

// let port = 9999;

// express().listen(port,() => {
//     console.log(`server listening on ${port}`)
// }
// )

const express = require('express');
const app = express();

app.get('/hieu',(req, res) =>{
    res.send("Hello World.")
})

let port = 9999;

app.listen(port,() => {
    console.log(`server listening on ${port}`)
}
) 