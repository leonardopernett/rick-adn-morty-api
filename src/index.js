const express = require('express')
const path = require('path')
const morgan = require('morgan')
const cors = require('cors')
const app = express()


app.set('port', process.env.PORT || 3000 )

app.use(morgan('dev'))
app.use(cors({origin:'*'}))

app.use(express.static(path.resolve('./public')))
app.listen(app.get('port'),()=>{
  console.log('server on port', app.get('port'))
})