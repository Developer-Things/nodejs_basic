
var start = require('http')
var method=require('moment')
start.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.write(" Current status:"+ method().format('MMMM Do YYYY, h:mm:ss a'))// March 10th 2022, 5:10:11 pm
    res.write('<br> Current status:'+method().format('lll'))
    res.write(" <br> Currentday:"+method().format('dddd'))
    res.write("<br> CurrentTime:"+method().format('LTS'))
    res.write('<br> Find: '+method("2021,1,31", "YYYYMMDD").fromNow())
    res.write('<br> Find in calulation: '+method("2021,1,31", "YYYYMMDD").add(2,'weeks').subtract(10,'days').format('lll'))
    res.write('<br> Day start with:'+method().startOf('day').fromNow())
    res.write('<br> Day end with:'+method().endOf('day').fromNow())
    res.end()
}).listen(4040)
