const express = require('express')
const app = express()
const port = 3000

// app.get('*', (req, res, next) => {
//     // res.setHeader('Link', '</img-1.jpeg>; rel=prefetch')
//     next()
// })
app.use('*jpeg*', (req, res, next) => {
    res.setHeader('Cache-Control', 'max-age=100')
    next()
})

app.use(express.static('./', { maxAge: 100, etag: false }))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})