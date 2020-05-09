var unirest = require("unirest");

var req = unirest("GET", "https://easy-instagram-service.p.rapidapi.com/get-post");

req.query({
	"shortcode": "B2yA71EgX6a"
});

req.headers({
	"x-rapidapi-host": "easy-instagram-service.p.rapidapi.com",
	"x-rapidapi-key": "27fe776426msh3c45f78dbc25942p1af9b0jsn1bb56775318f"
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});status