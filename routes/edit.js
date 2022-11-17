var express = require('express');
var router = express.Router();
const sqlite3 = require('sqlite3').verbose()


router.get('/', function(req, res, next) {
  res.render('edit', {data: null});
});

/*
router.post('/', (req, res, next) => {
    console.log("searching for match");
    var db = new sqlite3.Database('mydb.sqlite3', sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
    (err) => {
        if (err) {
            console.log("Error: " + err);
            exit(1);
        }

        console.log("searching for " + req.body.idNum);
        db.get(`SELECT * FROM blogEntries WHERE blog_id = ${req.body.search_id}`, [], (err, rows) => {
            if (err) {
                console.log("Error: " + err);
                exit(1);
            }


        })
        res.render('edit', {data: rows});
  });
})

router.post('/', (req, res, next) => {
    var db = new sqlite3.Database('mydb.sqlite3', sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
    (err) => {
        if (err) {
            console.log("Error: " + err);
            exit(1);
        }

        console.log("deleting " + delete_id);
        db.exec(`DELETE FROM blogEntries WHERE blog_id = delete_id`, [], (err, rows) => {
            if (err) {
                console.log("Error: " + err);
                exit(1);
            }

        })
        res.redirect('/edit');
        res.end();
    }
    );
})


router.post('/delete', () => {
    console.log("post received");
    res.redirect('/edit');
});

*/

module.exports = router;
