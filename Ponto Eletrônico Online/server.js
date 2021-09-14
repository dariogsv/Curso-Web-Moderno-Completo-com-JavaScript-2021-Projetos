const express = require('express')
const multer = require('multer')
const upload = multer({dest: 'uploads'})
const pool = require('./data/pool-factory')
const connectionMiddleware = require('./data/connection-middleware')
const mysqlQueries = require('./data/mysql-queries')


const app = express()

app.use(express.static('.'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(connectionMiddleware(pool))

app.post('/activity', upload.none(), (req, res, next) => {
    form = req.body
    console.log('#### app => atividade recebida ####')
    console.log(form)
    mysqlQueries.submit(req.connection, form)
        .then(results => {
            console.log('#### app => atividade registrada com sucesso ####')
            console.log(results)
            res.sendStatus(200)
        })
        .catch(next)
})

app.get('/diary', (req, res, next) => {
    console.log('#### app => processando get ####')
    mysqlQueries.list(req.connection)
        .then(diary => {
            console.log(diary)
            res.status(200).json(diary)
        })
        .catch(next)
})

app.use((err, req, res, next) => {
    console.error(err.stack);
	res.status(500).json({ error: err.toString() });
})

app.listen(8080, () => console.log(`#### app => escutando porta ${8080} ####`))