const express = require('express');

/**Creates an express application */
const app = express();
const port = 3000;

/** Set an route, que no caso faz refer */
app.get('/', (req, res) =>{ 
    res.send('Hello World!')

});

app.get('/profile/:id', (req, res) => {
    console.log(req.body);
    
    res.send('Hello, ' + req.params.id);
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));


