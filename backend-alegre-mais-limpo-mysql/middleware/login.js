require("dotenv/config");
const jwt = require('jsonwebtoken');

exports.required = (req, res, next) => {
    try {
        const token = req.headers.authorization.split('Bearer ')[1];
        const decode = jwt.verify(token, process.env.JWT_KEY);
        req.user = decode;
        console.log(req.user);
        next();
    } catch (error) {
        console.log(error);
        return res.status(401).send({ mensagem: 'Falha na autenticação' });
    }

}

exports.optional = (req, res, next) => {
    try {
        const token = req.headers.authorization.split('Bearer ')[1];
        const decode = jwt.verify(token, process.env.JWT_KEY);
        req.user = decode;
        next();
    } catch (error) {
        next();
    }

}