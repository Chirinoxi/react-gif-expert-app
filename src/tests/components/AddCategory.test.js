import React from 'react';
import { shallow } from "enzyme";
import '@testing-library/jest-dom';
import AddCategory from '../../components/AddCategory';

describe('Pruebas para componente AddCategory !', () => {

  const setCategories = jest.fn();
  let wrapper = shallow(<AddCategory setCategories={setCategories} />);

  // Declaramos el ciclo de vida de nuestras pruebas, antes de cada prueba..... !
  beforeEach(() => {
    jest.clearAllMocks(); // Limpiamos nuestros Mocks
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });

  test('El componente debe mostrarse correctamente ! ', () => {
    expect(wrapper).toMatchSnapshot();
  })

  test('Debe de simular un cambio en la caja de texto ! ', () => {
    const input = wrapper.find('input');
    const value = 'Hola mundo';
    input.simulate('change', { target: { value } });
    const paragraph = wrapper.find('p'); // Obtenemos nuestra etiqueta p
    expect(paragraph.text().trim()).toBe(value);
  })

  test('No debe de postear la información onSubmit ! ', () => {
    const form = wrapper.find('form');
    form.simulate('submit', { preventDefault() { } })
    expect(setCategories).not.toHaveBeenCalled();
  })

  test('Debe de llamar el setCategories y limpiar la caja de texto ! ', () => {
    // ************* TAREA *************
    // 1. Simular inputChange.
    // 2. Simular submit.
    // 3. Deben de haber llamado setCategories.
    // 4. Valor de input debe ser vacío (así: "").

    const value = 'Dr. Strange'; // valor para simular input change
    const input = wrapper.find('input');
    input.simulate('change', { target: { value: value } });

    const form = wrapper.find('form');
    form.simulate('submit', { preventDefault() { } });

    // expect(setCategories).toHaveBeenCalledTimes(1);
    // expect(setCategories).toHaveBeenCalled();
    // Evaluamos que se llame setCategories() y su argumento sea una función !
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
    expect(input.text().trim()).toBe("");
  })

})

