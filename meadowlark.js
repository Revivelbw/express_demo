var fortune = require('./lib/fortune.js')

var express = require('express')

var app = express();

var fortunes = [
	'conqure your fears or they will conquer you',
	'ruvers need springs',
	'do not fear what you don\'t konw',
	'you will have a pleasant surprise',
	'whenever possible,keep it simple'
]

//设置handlebars视图引擎
var handlebars = require('express3-handlebars');
app.engine('handlebars',handlebars({defaultLayout:'main'}));
app.set('view engine','handlebars')

app.set('port', process.env.PORT || 3000);

app.get('/',function(req,res){
	res.render('home')
});

app.get('/about',function(req,res){
	var randomFortune = 
		fortunes[Math.floor(Math.random()*fortunes.length)]
	res.render('about',{fortune:fortune.getFortune()})
});

app.use(express.static(__dirname+'/public'))

app.use(function(req,res,next) {
	res.status(404);
	res.render('404');
});

app.use(function(err,req,res,next) {
	console.error(err.stack)
	res.status(500);
	res.render('500')	
});

app.listen(app.get('port'),function() {
	console.log('express started on http://localhost:'+app.get('port')+';press ctrl-c tp terminate')
})