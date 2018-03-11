import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import TotalCountComponent from "../TotalCountComponent";

test('render total count', () => {
    const tree = renderer.create(<TotalCountComponent total={10}/>).toJSON();
    expect(tree).toMatchSnapshot();
});

test('ensure that the total is equal to passed prop', () => {
    const wrapper = shallow(<TotalCountComponent total={10}/>)
    const total = wrapper.find('Total');
    expect(total.get(0).props.children).toEqual(10);
});