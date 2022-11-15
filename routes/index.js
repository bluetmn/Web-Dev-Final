
var express = require('express');
var router = express.Router();
const sqlite3 = require('sqlite3').verbose()


/* GET home page. */
router.get('/', function(req, res, next) {
  var db = new sqlite3.Database('mydb.sqlite3', sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
    (err) => {
      if (err) {
        console.log("Uh Oh, Error encountered: " + err);
        exit(1);
      }
      //determine if database exists
      db.all(` SELECT name FROM sqlite_master WHERE type='table' AND name = 'blogEntries'`, 
        (err, rows) => {
          if (rows.length === 1) {
            console.log("Table exists already");

            db.all(` SELECT author, title, content FROM blogEntries`, (err, rows) => {
              console.log("returning " + rows.length + " records");
              res.render('index', { title: 'Blog entries', data: rows});
            })

          }
          else {
            console.log("Creating table");
            db.exec(`CREATE table blogEntries (
              blog_id INTEGER PRIMARY KEY AUTOINCREMENT,
              author VARCHAR,
              title VARCHAR NOT NULL, 
              content VARCHAR);`, () => {
                db.all(` SELECT author, title, content FROM blogEntries`, (err, rows) => {
                  console.log("returning " + rows.length + " records");
                  res.render('index', { title: 'returned data', data: rows});
                })
              });
            
              
          }

        })
    })
});

router.post('/add', (req, res, next) => {
  console.log('Adding to database');
  var db = new sqlite3.Database('mydb.sqlite3', sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
  (err) => {
    if (err) {
      console.log("Error: " + err);
      exit(1);
    }
    console.log("inserting " + req.body.author + " and " + req.body.title + " and " + req.body.content);
    db.exec(`insert into blogEntries ( author, title, content )
              VALUES ('${req.body.author}', '${req.body.title}', '${req.body.content}')`)
    res.redirect('/');
  }
  );
})


module.exports = router;