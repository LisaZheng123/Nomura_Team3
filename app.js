var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static('public'));
app.set ("view engine", "ejs");

var stocks = require("./request")


app.get("/", function(req,res){
  res.render("portfolio")
})


app.get("/trading", function(req,res){
  res.render("trading")
})
var ticker = async function(symbol){
  var price = await stocks.getStockData(symbol)
  console.log(price)
  return price;
}
app.get("/testEndpoint", function(req, res){
  var symbol = req.query.symbol;
  var qty = req.query.qty;
  // var stock_price = await stocks.getStockData(symbol);
  // console.log(stock_price);
  var stock =  {
    name: ticker(symbol),
    // buy_price: ticker(),
    // sell_price: ticker(askPrice)
    number: 
}
  console.log(stock.name)
  
})

app.listen(3000,async function(){
  console.log("Server started on PORT 3000")

  var stock_price = await stocks.getStockData("fb")
  // console.log(stock_price)
})

// app.listen(3000,function(){
//   console.log("Server started on PORT 3000")

//   var apple = stocks.getStockData("aapl")
//   apple.then(function (value) {
//     console.log(value)
        //  dom.updateGraph(value.price)
//   })
//   console.log("HI");
// })

