import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(8080, () =>
  console.log('Example app listening on port 8080!'),
);

app.get('/ping', (req, res) => {
    res.send('pong');
});