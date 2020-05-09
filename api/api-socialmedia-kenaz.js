var unirest = require("unirest");

var req = unirest("GET", "https://twinesocial.p.rapidapi.com/v1/collections");

req.query({
	"campaign": "louboutin"
});

req.headers({
	"x-rapidapi-host": "twinesocial.p.rapidapi.com",
	"x-rapidapi-key": "27fe776426msh3c45f78dbc25942p1af9b0jsn1bb56775318f"
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});