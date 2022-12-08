const prompt = require("prompt");

prompt.start();

let schema = {
    properties: {
      primeiroNome: {
        pattern: /^[a-zA-Z\s\-]+$/,
        message: 'Name must be only letters, spaces, or dashes',
        required: true
      },
      sobrenome: {
        pattern: /^[a-zA-Z\s\-]+$/,
        message: 'Name must be only letters, spaces, or dashes',
        required: true
      },
      email: {
        pattern: /\w+.+\@\w+\.\w+\.?\w*/g,
        massage: "Precisa estar no formato de email",
        require: true
      },
      cpf: {
        pattern: /[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}/,
        message: "Precisa ser um cpf válido",
        require: true
      }
    }
  };

  prompt.get(schema, function (err, result) {
    //
    // Log the results.
    //
    console.log('Command-line input received:');
    console.log('  Primeiro Nome: ' + result.primeiroNome);
    console.log('  Sobrenome: ' + result.sobrenome);
    console.log('  Email: ' + result.email);
    console.log('  Cpf: ' + result.cpf);
  });