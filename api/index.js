const express = require('express');
const cors = require('cors'); // Importa o pacote cors
const sendEmail = require('../emailService');
const app = express();

// Configuração do CORS
app.use(cors({
  origin: 'https://matheuslima.dev.br/', // Em produção, substitua por seu domínio específico
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type']
}));

app.use(express.json());

const PORT = 3000;

// Rota para enviar e-mail
app.post('/send-email', async (req, res) => {
  console.log('Requisição recebida:', req.body); // Debug
  
  const { to } = req.body;

  if (!to) {
    return res.status(400).json({ error: 'Faltando parâmetro: to' });
  }

  try {
    await sendEmail(to);
    res.status(200).json({ message: 'E-mail enviado com sucesso!' });
  } catch (error) {
    console.error('Erro ao enviar email:', error);
    res.status(500).json({ error: 'Erro ao enviar o e-mail' });
  }
});

// Rota principal
app.get('/', (req, res) => {
  res.json({ message: 'API funcionando!' });
});

// Para desenvolvimento local
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta http://localhost:${PORT}`);
  });
}

module.exports = app;