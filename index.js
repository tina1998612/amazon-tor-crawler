var tr = require("tor-request");
var scraper = require('product-scraper');
var fs = require('fs');
var PriceFinder = require('price-finder');
var priceFinder = new PriceFinder();

// configure to programmatically refresh the Tor session without restarting Tor client
tr.TorControlPort.password = "giraffe";
tr.setTorAddress("localhost", 9050);

// request a new IP every 3s
setInterval(function () {
  tr.newTorSession(err => {
    requestIP();
    crawl();
    return;
  });
}, 5000);

function requestIP() {
  tr.request("https://api.ipify.org", function (err, res, body) {
    if (!err && res.statusCode == 200) {
      console.log("Your public (through Tor) IP is: " + body);
    } else {
      console.log(err);
    }
  });
}

function crawl() {
  //scraper.init('https://www.amazon.com/dp/B009PCI2JU', function (data) {
  //let result = data.price + ", ";
  //console.log(result);
  //fs.appendFile('amazon.csv', result, function (err) {
  //  if (err) throw err;
  //  console.log('Saved!');
  //});
  //});
  priceFinder.findItemPrice('https://www.amazon.com/dp/B009PCI2JU', function (err, price) {
    if (!err && price != undefined) {
      fs.appendFile('amazon.csv', price, function (err) {
        if (err) throw err;
        console.log(price, 'Saved!');
      });
    } else console.log(err)
  });

}