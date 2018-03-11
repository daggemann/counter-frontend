import React from 'react';
import styled from 'styled-components';
import {FlexRow} from '../../commons/styled-components';

const Total = styled.span`
    margin-left: 10px;
`;
Total.displayName = 'Total';

export default function TotalCountComponent(props) {
    return (
        <FlexRow justifyContent='flex-end' margin='10px 0px 0px 0px'>
            Total:<Total>{props.total || 0}</Total>
        </FlexRow>
    )
}