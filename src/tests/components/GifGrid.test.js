import React from 'react';
import { shallow } from "enzyme";
import GifGrid from '../../components/GifGrid';
import useFetchGifs from '../../hooks/useFetchGifs';

// Creamos nuestro Mock
jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en componente <GifGrid /> ! ', () => {
  const thisCategory = 'Slam Dunk';

  test('Debe coincidir con snapshot ! ', () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true
    });
    const wrapper = shallow(<GifGrid category={thisCategory} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('Debe de mostrar items cuando se cargan imágenes mediante useFetch ! ', () => {
    const gifs = [
      {
        id: 'abc',
        title: 'unnamed',
        url: 'http:localhost:8050/img#2.jpg'
      },
      {
        id: 'def',
        title: 'unnamed #2',
        url: 'http:localhost:8050/img#2.jpg'
      }
    ];
    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false
    });
    const wrapper = shallow(<GifGrid category={thisCategory} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('p').exists()).toBe(false); // No debe existir un parrafo !
    expect(wrapper.find('GifGridItem').length).toBe(gifs.length); // Deben existir dos items en la grilla de Gifs !
  });
})