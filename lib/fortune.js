var fortuneCookies = [
	'conqure your fears or they will conquer you',
	'ruvers need springs',
	'do not fear what you don\'t konw',
	'you will have a pleasant surprise',
	'whenever possible,keep it simple'
]

exports.getFortune = function(){
	var idx = Math.floor(Math.random()*fortuneCookies.length);
	return fortuneCookies[idx]
}