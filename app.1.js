const Web3 = require('web3');
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var morganLoger = require('morgan');
const HDWalletProvider = require('@truffle/hdwallet-provider');
const uEnvironment = require('./utils/uEnvironment');

console.log('Starting...');
uEnvironment.loadEnvironment();


console.log(process.env.ADDRESS);
console.log(process.env.PRIVATEKEY);

const address    = process.env.ADDRESS;
const privateKey = process.env.PRIVATEKEY;

var indexRouter   = require('./routes/index.routes');
var ticketRouter  = require('./routes/ticket.routes');
const Event       = require('./build/contracts/Event.json');

const init = async () => {
    const provider = new HDWalletProvider(
        privateKey,
        'https://ropsten.infura.io/v3/37570d6f7c744976ab77ea208c574bcf'
    );
    const web3 = new Web3(provider);
    //   const id = await web3.eth.net.getId();
    //   const deployedNetwork = Event.networks[id];
    let eventContract = new web3.eth.Contract(
        Event.abi,
        '0xb6446f5da4ab07d642df22a5a556e64a2f70e845'
    );

    //   eventContract = await eventContract
    //     .deploy({ data: Event.bytecode })
    //     .send({ from: address });

    // const newSale = await eventContract.methods
    //   .addPurchasers(0, "Ernesto", "10-08-2020 18:36")
    //   .send({ from: address });
    // console.log("newSale: ", newSale);

    // const sales = await eventContract.methods
    //   .getTotalSales()
    //   .call({ from: address });
    // console.log("sales: ", sales);

    // const result = await eventContract.methods
    //   .getPurchasers(0)
    //   .call({ from: address });
    // console.log("owners: ", result);
};

init();

var app = express();

app.use(morganLoger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);
app.use('/api/v1/tickets', ticketRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

/**
 * A post by id
 */
app
    .use(function(err, req, res, next) {
    // set locals, only providing error in development
        res.locals.message = err.message;
        res.locals.error = req.app.get('env') === 'development' ? err : {};

        // render the error page
        res.status(err.status || 500);
        res.json('err or');
    })
    .listen(process.env.PORT || 3000);

module.exports = app;
