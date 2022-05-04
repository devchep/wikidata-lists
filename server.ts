import express from 'express'

const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.send('Express server' );
});

app.listen(port, () => console.log(`Listening on port ${port}`));