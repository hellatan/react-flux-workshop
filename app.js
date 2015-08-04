var express = require('express');
var glob = require('glob');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    var bundles = glob.sync('./public/c/*.bundle.js');
    res.render('template.ejs', {
        id: null,
        bundleIds: bundles.map(function (bundle) {
            return bundle.match(/\.\/public\/c\/(.+)\.bundle\.js/)[1];
        })
    });
});

app.get('/:id', function (req, res) {
    var id = req.params.id;
    res.render('template.ejs', {
        id: id
    });
});

app.use('/public/', express.static('public'));

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});