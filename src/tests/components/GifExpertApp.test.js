import React from 'react';
import { shallow } from 'enzyme';
import GifExpertApp from '../../components/GifExpertApp';

describe('Pruebas en componente GifExpertApp !', () => {
  test('Debe desplegarse correctamente !', () => {
    const wrapper = shallow(<GifExpertApp />);
    expect(wrapper).toMatchSnapshot();
  });

  test('Debe de mostrar una lista de categorías !', () => {
    const categories = ['Marvel', 'Shingeki no Kyojin'];
    const categoriesLength = categories.length;
    const wrapper = shallow(<GifExpertApp defaultCategories={categories}/>);
    expect(wrapper.find('GifGrid').length).toBe(categoriesLength);
  });

  test('Debe de UN existir componente AddCategory ! ', () => {
    const wrapper = shallow(<GifExpertApp />);
    expect(wrapper.find('AddCategory').length).toBe(1);
  });

})
