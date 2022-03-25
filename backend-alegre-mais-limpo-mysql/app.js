const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

const userRoute = require('./routes/user-route');
const adminRoute = require('./routes/admin-route');
const auxiliarRoute = require('./routes/auxiliar-route');
const motoristaRoute = require('./routes/motorista-route');
const caminhaoRoute = require('./routes/caminhao-route');
const manutencaoRoute = require('./routes/manutencao-route');
const abastecimentoRoute = require('./routes/abastecimento-route');
const zonaRoute = require('./routes/zona-route');
const ruaRoute = require('./routes/rua-route');

app.use(morgan('dev'));
//app.use('/uploads', express.static('uploads'));
app.use(bodyParser.urlencoded({ extended: false }));  // apenas dados simples
app.use(bodyParser.json()); // json de entrada no body

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );

    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).send({});
    }
    next();
});

app.use('/usuario', userRoute);
app.use('/admin', adminRoute);
app.use('/auxiliar', auxiliarRoute);
app.use('/motorista', motoristaRoute);
app.use('/caminhao', caminhaoRoute);
app.use('/manutencao', manutencaoRoute);
app.use('/abastecimento', abastecimentoRoute);
app.use('/zona', zonaRoute);
app.use('/rua', ruaRoute);

app.use((req, res, next) => {
    const erro = new Error('Não encontrado');
    erro.status = 404;
    next(erro);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    return res.send({
        erro: {
            mensagem: error.message
        }
    });
});

module.exports = app;