import React from 'react';
import 'jest-styled-components';
import CounterContainer from "../CountersContainer";

jest.mock('../Counter');

test('ensure that counters container can get counters when mounted', () => {
    const component = mount(<CounterContainer/>);
    const promise = Promise.resolve();
    return promise
        .then(() => {
            expect(component.update().find('Total').get(0).props.children).toEqual(3)
        })
});

test('ensure that counter container can add a counter and update accordingly', () => {
    const component = mount(<CounterContainer/>);
    const input = component.find('Input');
    input.simulate('change', {target: {value: 'test'}});
    const addButton = component.find('AddButton');
    addButton.simulate('click');
    const promise = Promise.resolve();
    return promise
        .then(() => {
            expect(component.update().find('CounterComponent').length).toEqual(4);
            expect(component.find('Total').get(0).props.children).toEqual(4);
        })
});
