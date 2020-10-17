import express from 'express';
import path from 'path';
import 'express-async-errors';
import cors from 'cors';

import './database/connection';

import routes from './routes';
import errorHandler from './errors/handler';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname,'..','uploads')));
app.use(errorHandler);

//Express não entende json por padrão
// Rota = conjunto
//Recurso = usuario

// Métodos Http = GET, POST, PUT, DELETE
// Parâmetros

//GET = é buscar uma informação
//POST = criando uma informação nova
//PUT = editando uma informação
//DELETE = deletando uma informação

//Query Params : http://localhost:3333/users?search=diego&page=2
//Route Params : http://localhost:3333/users/1 (identificar um recurso)
//Body : http://localhost:3333/users 



app.listen(3333);

//REQ / RES
//Consegue acessar o backend por localhost:3333
//Driver nativo, Query builder, ORM
//Query builder é mais amigável
