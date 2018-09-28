var express = require('express');
var router = express.Router();

var fs = require('fs');
var targetPath = './target';


/* GET home page. */
const getDirs = (path) => fs.readdirSync(path).filter(file => {
    return fs.statSync(path + '/' + file).isDirectory();
});

router.get('/targetList', function (req, res, next) {
    res.json({'targetList': getDirs(targetPath)})
});

router.get('/remove', function (req, res, next) {
    const removeTarget = req.query['target'];
    fs.rmdir(targetPath + '/' + removeTarget, () => {
        res.json({'targetList': getDirs(targetPath)});
    });
});

router.get('/train', function (req, res, next) {

});

router.get('/conversion', function (req, res, next) {

});

module.exports = router;
