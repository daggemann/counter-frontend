import React from 'react';
import styled from 'styled-components';

const TotalCount = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin-top: 10px;
`;

const Text = styled.span``;
Text.displayName = 'Text';

const Total = styled.span`
    margin-left: 10px;
`;
Total.displayName = 'Total';

export default function TotalCountComponent(props) {
    return (
        <TotalCount>
            <Text>Total:</Text>
            <Total>{props.total || 0}</Total>
        </TotalCount>
)
}