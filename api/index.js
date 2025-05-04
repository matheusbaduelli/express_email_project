const express = require('express');
const sendEmail = require('../emailService'); // Importa o serviço de envio de e-mail
const app = express();

app.use(express.json()); // Para poder receber JSON no corpo das requisições

// Rota para enviar e-mail
app.post('/send-email', async (req, res) => {
  const { to, subject, text } = req.body;

  if (!to || !subject || !text) {
    return res.status(400).send('Faltando parâmetros: to, subject e text');
  }

  try {
    await sendEmail(to, subject, text);
    res.status(200).send('E-mail enviado com sucesso!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao enviar o e-mail');
  }
});

// Rota principal
app.get('/', (req, res) => {
  res.send('Olá, Vercel com Express!');
});

// Exporta o app para a Vercel
module.exports = app;
