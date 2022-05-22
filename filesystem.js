// readfile
var getting = require('http')
var files = require('fs')
getting.createServer(function (reqs, ress) {
    files.readFile('index.html', function (err, datas) {
        ress.writeHead(200, { 'Content-Type': 'text/html' })
        ress.write(datas);
        return ress.end();
    })
}).listen(8020)


//appendFile
var fs = require('fs');  
fs.appendFile('index.html', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});   


// open
var fs = require('fs');  
fs.open('index.html', 'w', function (err, file) {
  if (err) throw err;
  console.log('Saved!');
});


// writeFile
var fs = require('fs');
fs.writeFile('index.html', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});


// unlink
var fs = require('fs');
fs.unlink('index.html', function (err, file) {
  if (err) throw err;
  console.log('Saved!');
});

// rename
var fs=require('fs')
fs.rename('main.html', 'index.html',function(err,file){
  if(err)throw err;
 console.log('change')
});

// copyFileSync
var start=require('fs')
start.copyFileSync('indexs.html','copy.html' ,function(){
    console.log('saved')
})

// overalladd
var one = require('http')
var two = require('fs')

one.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    two.open('indexs.html', 'w', function (err, file) {
        if (err) throw err
        console.log('open success')
        two.writeFile('indexs.html', 'node js', function (err) {
            if (err) throw err
            console.log('write success')
            two.appendFile('indexs.html', 'node js asynchronous', function (err) {
                if (err) throw err
                console.log(' appendFilesucess')
                two.readFile('indexs.html', function (err, transfer) {
                    res.write(transfer)
                })
            })
        })
    });

}).listen(4434)
