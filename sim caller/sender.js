var request = require('request')
var fs = require('fs')

data = fs.readFileSync('./24car2.jpg')
console.log(data instanceof Buffer)
request.post(
  'https://etollsimulator-app.mybluemix.net/simulate',
  {
    json: {
      "Icon": "app/img/icon_car.png",
      "Name": "Simulate <br>   Car",
      "TagID": "C16FFAFFFF195200",
      "TollID": "2000",
      "active": true,
      "Display": "C16F195200",
      "name": "Car",
      //"image": "http://f1.pepst.com/c/56FEEA/139008/ssc3/home/001/tunig.car.hit/url__2_.jpg_480_480_0_64000_0_1_0.jpg"
      "image": data.toString('base64')
    }
  },
  function (error, response, body) {
    console.log('Inside callback')
    if (!error && response.statusCode == 200) {
      console.log(body)
    }
  }
)