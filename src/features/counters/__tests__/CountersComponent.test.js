import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import {Counter} from "../Counter";
import CountersComponent from "../CountersComponent";


test('render counters with no counters', () => {
    const counters = [];
    const tree = renderer.create(<CountersComponent counters={counters} totalCount={0}/>)
    expect(tree.toJSON()).toMatchSnapshot();
});

test('render counters with some counters that have no count', () => {
    const counters = [
        new Counter(1, "test", 0),
        new Counter(2, "test", 0),
        new Counter(3, "test", 0),
    ];
    const tree = renderer.create(<CountersComponent counters={counters} totalCount={0}/>)
    expect(tree.toJSON()).toMatchSnapshot();
});

test('render counters with some counters that have some count', () => {
    const counters = [
        new Counter(1, "test", 1),
        new Counter(2, "test", -2),
        new Counter(3, "test", 5),
    ];
    const tree = renderer.create(<CountersComponent counters={counters} totalCount={4}/>)
    expect(tree.toJSON()).toMatchSnapshot();
});

test('ensure that correct amount of CounterComponent are added', () => {
    const counters = [
        new Counter(1, "test", 1),
        new Counter(2, "test", -2),
        new Counter(3, "test", 5),
    ];
    const countersComponent = shallow(<CountersComponent counters={counters} totalCount={4}/>)
    const counterComponents = countersComponent.find('CounterComponent');
    expect(counterComponents.length).toEqual(3)
});

test('ensure that NewCounterContainer is rendered', () => {
    const counters = [];
    const countersComponent = shallow(<CountersComponent counters={counters} totalCount={0}/>)
    const addCounterComponent = countersComponent.find('NewCounterContainer');
    expect(addCounterComponent.length).toEqual(1)
});

test('ensure that TotalCountComponent is rendered', () => {
    const counters = [];
    const countersComponent = shallow(<CountersComponent counters={counters} totalCount={0}/>)
    const totalCountComponent = countersComponent.find('TotalCountComponent');
    expect(totalCountComponent.length).toEqual(1)
});
