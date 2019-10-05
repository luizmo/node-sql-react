const express = require('express');
const app = express();
const server = require('http').createServer(app);
const port = process.env.PORT || 3333;
const teste = require('./routes');
const cors = require('cors');
const morgan  = require('morgan');

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended:true
}));
app.use(cors());
app.use('/',teste);


server.listen(port,()=>{
    console.log(`Api rodando na porta:${port}`);
});
