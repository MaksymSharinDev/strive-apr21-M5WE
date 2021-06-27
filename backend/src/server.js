import express from "express"
import cors from 'cors';
import 'dotenv/config';
import listEndpoints from "express-list-endpoints"
import authorRouter from './authors/index.js'


const server = express()
const port = 3001

server.use(cors())

//burda gelen reqleri jsonda parseliyor. bunu endpointten önce vericez ki undefined olmasin reqler
server.use(express.json()) 

// endpoinler burada geliyor 
server.use("/authors", authorRouter)



// server endpointlerini tabloda gösterme islemi sanirsam
console.table(listEndpoints(server))



server.listen(port, () => console.log(`Listening on port ${port}`))