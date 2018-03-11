import React from 'react';
import styled from 'styled-components';
import {Button, FlexRow} from "../../commons/styled-components";

const DeleteButton = Button.extend`
    &:hover {
        margin-right: 10px;
    }
`;
DeleteButton.displayName = 'DeleteButton';

const Title = styled.span`
    margin-top: 6px;
    text-align: center;
`;
Title.displayName = 'Title';

const DecrementButton = Button.extend`
    &:hover {
        background-color: #7FDBFF;
    }

`;
DecrementButton.displayName = 'DecrementButton';

const Count = styled.span`
    text-align: center;
    margin-top: 6px;
    width: 50px;
`;
Count.displayName = 'Count';

const IncrementButton = Button.extend`
    &:hover {
        background-color: #7FDBFF;
    }
`;
IncrementButton.displayName = 'IncrementButton';

export default function CounterComponent(props) {
    return (
        <FlexRow justifyContent='space-between' margin='5px 0px 0px 0px' height='30px'>
            <FlexRow>
                <DeleteButton
                    onClick={() => props.delete(props.counter.id)}
                    width='30px'
                    margin='0px 2px 0px 0px'
                    border='0px'
                    borderRadius='1em 0em 0em 1em'
                    backgroundColor='#FF4136'
                >
                    x
                </DeleteButton>
                <Title>{props.counter.title}</Title>
            </FlexRow>
            <FlexRow width='100px'>
                <DecrementButton
                    onClick={() => props.decr(props.counter.id)}
                    width='20px'
                    border='0px'
                    borderRadius='1em 0em 0em 1em'
                >
                    -
                </DecrementButton>
                <Count>{props.counter.count}</Count>
                <IncrementButton
                    onClick={() => props.incr(props.counter.id)}
                    width='20px'
                    border='0px'
                    borderRadius='0em 1em 1em 0em'
                >
                    +
                </IncrementButton>
            </FlexRow>
        </FlexRow>
    )
}