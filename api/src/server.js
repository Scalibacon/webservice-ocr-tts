const app = require('./app');
const PORT = 3333;

app.listen(PORT, () => console.log('Servidor ON na porta ' + PORT));

// const recognizer = require('./models/RecognizerModel');
// recognizer.recognizeImage('./src/images/image.jpg');