class ExternalEmailService {
    sendMessage(to, message) {
      console.log(`🔵 Enviando a ${to}:`);
      console.log(message);
    }
  }
  
  module.exports = ExternalEmailService;
  