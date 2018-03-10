import React from 'react';
import styled from 'styled-components';

const FlexRow = styled.div`
    display: flex;
    flex-direction: row;
    ${props => (props.width) ? 'width: ' + props.width : ''};
    ${props => (props.justifyContent) ? 'justify-content: ' + props.justifyContent : ''};
`;

const StyledCounter = FlexRow.extend`
    margin-top: 5px;
    height: 30px;
`;

const Delete = styled.button`
    width: 30px;
    border: 0px solid black;
    border-radius: 1em 0em 0em 1em;
    background-color: #FF4136;
    margin-right: 2px;

    &:hover {
        margin-right: 10px;
    }
`;

const Title = styled.span`
    margin-top: 6px;
    text-align: center;
`;

const Decrement = styled.button`
    width: 20px;
    border: 0px;
    border-radius: 1em 0em 0em 1em;
    
    &:hover {
        background-color: #7FDBFF;
    }
`;

const Count = styled.span`
    text-align: center;
    margin-top: 6px;
    width: 50px;
`;

const Increment = styled.button`
    width: 20px;
    border: 0px;
    border-radius: 0em 1em 1em 0em;
    
    &:hover {
        background-color: #7FDBFF;
    }
`;


export default function CounterComponent(props) {
    return (
        <StyledCounter justifyContent='space-between'>
            <FlexRow>
                <Delete onClick={() => props.delete(props.counter.id)}>x</Delete>
                <Title>{props.counter.title}</Title>
            </FlexRow>
            <FlexRow width='100px'>
                <Decrement onClick={() => props.decr(props.counter.id)}>-</Decrement>
                <Count>{props.counter.count}</Count>
                <Increment onClick={() => props.incr(props.counter.id)}>+</Increment>
            </FlexRow>
        </StyledCounter>
    )
}