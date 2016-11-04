var koa = require('koa');
var app = koa();

app.use(function *(){
    var path = this.path;
    this.body = path;
});

app.listen(3000);
console.log('listening on port 3000');