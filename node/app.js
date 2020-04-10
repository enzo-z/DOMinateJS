const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) =>{ 
    res.send('<h1>Hello World!</h1>');
});

app.get('/some/:num', (req, resp) => {
    resp.send('Esse foi o número:' + req.params.num);
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
