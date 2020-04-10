const express = require('express');
const app = express();
const port = 3000;


/**Setting the view path and the view engine [ejs] */
app.set('views', '/home/ezamora/Github/DOMinateJS/node/testLearn/express/views');
app.set('view engine', 'ejs');

/**Middleware e Static File */
app.use('/public/assets', express.static('testLearn/express/public/assets'));

/**Route params */
app.get('/view/:id', (req, res) => {
    /**Data to embedd on the view */
    let data = {name:'Zamora', age: 19, fears: ['death', 'sharks', 'suicide']};
    /**Serving the view with the embedded data (data created and the route param!)*/
    res.render('testView', {id: req.params.id, data});
    

});

/**Query String */
app.get('/query/', (req, res) => {
    console.log(req.query);
    res.render('queryView', {qs : req.query});
});

/**Handling POST Request */

const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({extended:true});

app.post('/query', urlencodedParser, (req, res) => {
    /**req.body to get the data from the inputs on the form via POST, on the view: queryView.ejs */
    console.log(req.body); 
    res.render('queryView', {qs: {p1: null, p2:null}});
})


app.listen(port, () => console.log(`Example app listening on port: ${port}!`));