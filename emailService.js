const path = require('path');
require('dotenv').config();


const nodemailer = require('nodemailer');

// Configuração do transporte de e-mail (aqui usamos Gmail como exemplo)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL, // Substitua pelo seu e-mail
    pass: process.env.SENHA // Se estiver usando o Gmail, pode ser uma senha de app
  }
});

// Função para enviar e-mail
const sendEmail = (to) => {

  const subject = "Conheça mais sobre mim"

  const text = "Olá,Meu nome é Matheus Rodrigues de Lima, sou formado em Análise e Desenvolvimento de Sistemas e atuo na área de tecnologia com foco em desenvolvimento de software e automação de processos. Tenho experiência prática com linguagens como Python, JavaScript e Java, além de conhecimentos sólidos em banco de dados SQL, desenvolvimento de APIs com Node.js e integração de sistemas. Também possuo vivência com frameworks como React Native e bibliotecas como pandas, OpenCV e MediaPipe, voltados para projetos de automação, visão computacional e aplicações web e mobile. Estou sempre em busca de aprimorar minhas habilidades técnicas e contribuir de forma prática para o desenvolvimento de soluções robustas, escaláveis e orientadas a resultados. Veja em anexo meu currículo e entre em contato para mais informações"
  
  const mailOptions = {
    from: process.env.EMAIL,
    to,
    subject,
    text,
    attachments: [
                {
                    filename: 'documento.pdf',
                    path:  path.join(__dirname, 'arquivos', 'Curriculo.pdf')
                }
            ]
  };

  return transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
