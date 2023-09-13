const app = require('../src/app');

require('dotenv').config();

const PORT = process.env.PORT || 3333;

     // escutar a porta 3000 ou a porta do serviço
     app.listen(PORT, () => {
        console.log(`Servidor rodando no endereço http://localhost:${PORT}`)
    }) 