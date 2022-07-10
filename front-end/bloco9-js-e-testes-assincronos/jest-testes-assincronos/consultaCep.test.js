const { consultaCep } = require('./consultaCep');


it('Verifica se retorna o logradouro', async () => {
  expect(await consultaCep('30130010')).toEqual('Praça Sete de Setembro');
});


