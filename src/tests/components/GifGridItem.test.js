import React from "react";
import { shallow } from "enzyme";
import GifGridItem from "../../components/GifGridItem.jsx";

describe("Pruebas es <GifGridItem />", () => {
  const parameters = {
    title: "Titulo",
    url: "https://localhost:8050/hola.jpg",
  };
  const wrapper = shallow(
    <GifGridItem title={parameters.title} url={parameters.url} />
  );

  test("Debe mostrar el componente correctamente ! ", () => {
    //const wrapper = shallow(<GifGridItem {...parameters} />);
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de tener un párrafo con el título de la categoría ! ", () => {
    const p = wrapper.find("p");
    expect(p.text().trim()).toBe(parameters.title);
  });

  test("Debe de tener una imagen igual a parmeters ! ", () => {
    const img = wrapper.find("img");
    expect(img.prop("src").trim()).toBe(parameters.url);
    expect(img.prop("alt").trim()).toBe(parameters.title);
  });

  test("Debe de tener una animación animate__fadeInDown ! ", () => {
    const div = wrapper.find("div");

    // --------------- Forma #1 ---------------
    // const className = div.prop('className').split(' ')[2];
    // expect(className).toBe("animate__fadeInDown");

    // --------------- Forma #2 ---------------
    const className = div.prop("className");
    expect(className.includes("animate__fadeInDown")).toBe(true);
  });
});
