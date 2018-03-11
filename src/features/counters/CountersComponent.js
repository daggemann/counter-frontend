import React from 'react';
import AddCounterContainer from './AddCounterContainer';
import TotalCountComponent from './TotalCountComponent';
import CounterComponent from './CounterComponent';
import {FlexCol, HorizontalLine} from "../../commons/styled-components";

export default function CountersComponent(props) {
    return (
        <FlexCol
            margin='20px'
            padding='5px'
            width='300px'
        >
            <AddCounterContainer
                onClick={(title) => props.addCounter(title)}
            />
            <HorizontalLine
                margin='20px 0px 10px 0px'
                borderWidth='0px 0px 1px 0px'
                borderStyle='dashed'
                borderColor='gray'
            />

            {props.counters.map((counter) => {
                return <CounterComponent
                    key={counter.id}
                    counter={counter}
                    decr={(i) => props.decrementCounter(i)}
                    incr={(i) => props.incrementCounter(i)}
                    delete={(i) => props.deleteCounter(i)}
                />
            })}

            <HorizontalLine
                margin='20px 0px 0px 0px'
                borderWidth='0px 0px 1px 0px'
                borderStyle='dashed'
                borderColor='gray'
            />
            <TotalCountComponent total={props.totalCount}/>
        </FlexCol>
    )
}

