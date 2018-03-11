import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import NewCounterComponent from '../NewCounterComponent'

test('render new counter', () => {
    const tree = renderer.create(<NewCounterComponent/>);
    expect(tree.toJSON()).toMatchSnapshot();

    const instance = tree.getInstance();
    instance.setState({title: 'test'});

    expect(tree.toJSON()).toMatchSnapshot();
});

test('ensure that title state is given in input', () => {
    const wrapper = shallow(<NewCounterComponent/>);
    let input = wrapper.find('Input');
    expect(input.get(0).props.value).toEqual('');

    wrapper.setState({title: 'test'});
    input = wrapper.find('Input');
    expect(input.get(0).props.value).toEqual('test');
});

test('ensure that we are able to add counter when title state is non-blank', () => {
    const onClickMock = jest.fn();
    const wrapper = shallow(<NewCounterComponent onClick={onClickMock}/>);
    wrapper.setState({title: 'test'});
    const button = wrapper.find('AddButton');
    button.simulate('click')
    expect(onClickMock).toHaveBeenCalledTimes(1);
});

test('ensure that we are not able to add counter when title state is blank', () => {
    const onClickMock = jest.fn();
    const wrapper = shallow(<NewCounterComponent onClick={onClickMock}/>);
    const button = wrapper.find('AddButton');
    button.simulate('click')
    expect(onClickMock).toHaveBeenCalledTimes(0);
});
