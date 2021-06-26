import express from "express"
import cors from 'cors';
import 'dotenv/config';

const app = express()

app.use(cors())

const port = process.env.PORT || 3000

app.get('/', async (req, res) => {
    return res.send('Received a GET HTTP method');
});
app.post('/', (req, res) => {
    return res.send('Received a POST HTTP method');
});
app.put('/', (req, res) => {
    return res.send('Received a PUT HTTP method');
});
app.delete('/', (req, res) => {
    return res.send('Received a DELETE HTTP method');
});

app.listen(port, () => console.log(`Listening on port ${port}`))