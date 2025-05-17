const ExternalEmailService = require('./externalEmailService');

class EmailAdapter {
  constructor() {
    this.service = new ExternalEmailService();
  }

  sendEmail(email, subject, body) {
    const message = `Asunto: ${subject}\nContenido: ${body}`;
    this.service.sendMessage(email, message);
  }
}

module.exports = EmailAdapter;
