import getGifs from '../../helpers/ApiService';

describe('Pruebas con getGifs fetch-api !', () => {
  test('Debe traer 10 elementos ! ', async () => {
    const queryString = 'Samurai X';
    const gifs = await getGifs(queryString);
    expect(gifs.length).toBe(10);
  });

  test('Prueba sin categoría ! ', async () => {
    const queryString = '';
    const gifs = await getGifs(queryString);
    expect(gifs.length).toBe(0);
  });

})
