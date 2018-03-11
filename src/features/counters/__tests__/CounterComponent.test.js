import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import CounterComponent from "../CounterComponent";
import {Counter} from '../Counter';

test('render counter', () => {
    const counter = new Counter(1, "test", 1);
    const tree = renderer.create(<CounterComponent counter={counter}/>);
    expect(tree.toJSON()).toMatchSnapshot();
});

test('ensure that title and count are displayed', () => {
    const counter = new Counter(1, "test", 1);
    const component = shallow(<CounterComponent counter={counter}/>);
    const title = component.find('Title');
    const count = component.find('Count');
    expect(title.get(0).props.children).toEqual("test");
    expect(count.get(0).props.children).toEqual(1);
});

test('delete counter', () => {
    const mockDelete = jest.fn();
    const counter = new Counter(1, "test", 1);
    const component = shallow(<CounterComponent delete={(i) => mockDelete(i)} counter={counter}/>);
    const deleteButton = component.find('DeleteButton');
    deleteButton.simulate('click');
    expect(mockDelete).toHaveBeenCalledTimes(1);
    expect(mockDelete).toBeCalledWith(1)
});

test('increment counter', () => {
    const mockIncrement = jest.fn();

    const counter = new Counter(1, "test", 1);
    const component = shallow(<CounterComponent incr={(i) => mockIncrement(i)} counter={counter}/>);
    const incrementButton = component.find('IncrementButton');
    incrementButton.simulate('click');
    expect(mockIncrement).toHaveBeenCalledTimes(1);
    expect(mockIncrement).toBeCalledWith(1);
});

test('decrement counter', () => {
    const mockDecrement = jest.fn();

    const counter = new Counter(1, "test", 1);
    const component = shallow(<CounterComponent decr={(i) => mockDecrement(i)} counter={counter}/>);
    const incrementButton = component.find('DecrementButton');
    incrementButton.simulate('click');
    expect(mockDecrement).toHaveBeenCalledTimes(1);
    expect(mockDecrement).toBeCalledWith(1);
});

