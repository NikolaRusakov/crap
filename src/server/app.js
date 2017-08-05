import express from 'express';

const app = express();
var exphbs = require('express-handlebars');
import getFolders from '../folders/folders';
import drive from './driveAPI/loginToDrive';
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/drive', function (req, res) {
    drive((rootFolder)=>{
        res.json(rootFolder);
    });
});

app.get('/slovicka', function (req, res) {
    console.log('CHLEBA');

    res.json({vocab: getFolders()});
});

app.use(express.static('../public'));

app.get('*', function (req, res) {
    if (idDev()) res.render('home', {address: getBundleAddress()});
});

app.listen(8000, () => console.log('Example app listening on port 8000!'));

function idDev() {
    return true;
}

function getBundleAddress() {
    if (idDev()) {
        return 'http://localhost:3000/static/js/bundle.js';//main.8c0f332b
    }
    return 'http://localhost:8000/static/js/bundle.js';
}
