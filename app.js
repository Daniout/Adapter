const express = require('express');
const path = require('path');
const EmailAdapter = require('./emailAdapter');

const app = express();
const emailService = new EmailAdapter();

app.use(express.static('views'));
app.use(express.json());

app.post('/send', (req, res) => {
  const { email, subject, body } = req.body;
  emailService.sendEmail(email, subject, body);
  res.send('✅ Correo enviado (simulado). Ver consola.');
});

app.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});
