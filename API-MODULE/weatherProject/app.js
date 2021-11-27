
const { response } = require("express");
const express = require("express");
const https = require("https");
const bodyParser = require("body-parser")

const app = express();

app.use(bodyParser.urlencoded({ extented: true }));


app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html")
});

app.post("/", function (req, res) {
    const query = req.body.cityName;
    const apikey = "7e343462eae5bc0bdfb70bcae743bc36"
    const unit = "metric"
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apikey + "&units=" + unit

    https.get(url, function (response) {
        console.log(response.statusCode);
        response.on("data", function (data) {
            const weatherData = JSON.parse(data);
            const weatherDiscription = weatherData.weather[0].description;
            const temp = weatherData.main.temp;
            const icon = weatherData.weather[0].icon;
            const imageURL = " http://openweathermap.org/img/wn/" + icon + "@2x.png"
            res.write("<h1>the weather is currently " + weatherDiscription + "</h1>");
            res.write("<h1>the temperature in "+ query+" is " + temp + "degree Celcius</h1>");
            res.write("<img src=" + imageURL + ">")
            res.send();
        });
    })

})


app.listen(3000, function () {
    console.log("server is running on port 3000");
});



// 