// var koa = require('koa');
// var app = koa();

// app.use(function *(){
//     var path = this.path;
//     this.body = path;
// });

// app.listen(3000);
// console.log('listening on port 3000');

var koa = require('koa');
var app = koa();
var router = require('koa-router');

app.use(router(app));
app.get('/', function *(next) {
	this.body = "home page";
});

app.param('id',function *(id,next){
    this.id = Number(id);
    if ( typeof this.id != 'number') return this.status = 404;
    yield next;
}).get('/detail/:id', function *(next) {
    //我是详情页面 eg. http://localhost:3000/detail/456
    var id = this.id; //123
    this.body = id;
});

app.on('error', function(err,ctx){
    if (process.env.NODE_ENV != 'test') {
        console.log(err.message);
        console.log(err);
    }
}); 

app.listen(3000);
console.log('listening on port 3000');