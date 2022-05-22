var start = require('express')
var second = start()


second.get('/', function (req, res) {
    res.cookie("name", "aravind").cookie('profession', 'developer').send('send success')
})
second.get('/cleardatas', function (req, res) {
    res.clearCookie('name')
    res.clearCookie('profession')
    res.send('end')

})

second.listen(3200)

