const express = require('express');
const fs = require('fs');
const app = express();
app.use(express.json());
app.use(express.static('.'));

let db = { visitas: 0, cliques: 0 };

app.get('/', (req, res, next) => {
  db.visitas++;
  fs.writeFileSync('db.json', JSON.stringify(db));
  next();
});

app.post('/click', (req, res) => {
  db.cliques++;
  fs.writeFileSync('db.json', JSON.stringify(db));
  res.json({ ok: true });
});

app.get('/stats', (req, res) => {
  res.json(db);
});

app.listen(3000, () => console.log('Servidor rodando na porta 3000'));
