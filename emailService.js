const path = require('path');

const nodemailer = require('nodemailer');

// Configuração do transporte de e-mail (aqui usamos Gmail como exemplo)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'mhs.djc@gmail.com', // Substitua pelo seu e-mail
    pass: 'grfq nouo zojb jcqv' // Se estiver usando o Gmail, pode ser uma senha de app
  }
});

// Função para enviar e-mail
const sendEmail = (to, subject, text) => {
  const pdfPath = path.join(__dirname, 'arquivos', 'seuarquivo.pdf');
  const mailOptions = {
    from: 'mhs.djc@gmail.com',
    to,
    subject,
    text,
    attachments: [
                {
                    filename: 'documento.pdf',
                    path: pdfPath
                }
            ]
  };

  return transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
