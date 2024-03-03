// server.js
const express = require('express');
const jsonServer = require('json-server');
const cors = require('cors');

const app = express();
const jsonServerApp = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

const PORT = process.env.PORT || 3001;

// Използвайте CORS middleware
app.use(cors());

// Позволява четене на JSON от тяло на заявката
app.use(express.json());

// Рутинг за приемане на POST заявки на '/messages'
app.post('/messages', (req, res) => {
  // Извлечение на информацията от тялото на заявката
  const messageData = req.body;

  // Тук можете да обработите информацията, която сте извлекли
  console.log('Received message:', messageData);

  // Отговор към клиента
  res.json({ message: 'Message received successfully' });
});

// Приложете middleware към Express
app.use(middlewares);

// Приложете JSON Router
app.use(router);

// Стартирайте JSON Server
jsonServerApp.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});

// Стартирайте Express сървър
app.listen(PORT + 1, () => {
  console.log(`Additional Express server is running on port ${PORT + 1}`);
});
