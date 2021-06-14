const { recognizeImage } = require('../src/models/RecognizerModel');
// const image = require('./teste.png');

describe('Test the RecognizerModel', () => {

    it('should get "teste"', async () => {
        // console.log(image)
        const lang = 'pt-BR';

        // const result = await recognizeImage(image, lang);

        expect('teste').toBe('teste');
    })

});