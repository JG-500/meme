const express = require('express')
const app = express()
const porta = process.env.PORT || '3000'

app.get('/', async function name(req, res, next) {
    res.json({mssage: "vivo"})
})

app.listen(porta, () => {
    console.log(`Escutando na porta ${porta}`)
})