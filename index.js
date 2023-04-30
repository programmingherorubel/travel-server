const express = require('express')
const cors = require('cors')
const app = express()
const port = 5000

app.use(cors())

const travel = require('./data/travel.json')

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/travel', (req, res) => {
  res.send(travel)
})

app.get('/travel/:id',(req,res)=>{
    const id = parseInt(req.params.id)
    const findingData = travel.find(travelInfo => parseInt(travelInfo.id) === id)
    res.send(findingData)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})