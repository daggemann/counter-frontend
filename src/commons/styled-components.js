import styled from 'styled-components';

export const FlexRow = styled.div`
    display: flex;
    flex-direction: row;
    ${props => (props.width) ? 'width: ' + props.width : ''};
    ${props => (props.justifyContent) ? 'justify-content: ' + props.justifyContent : ''};
    ${props => (props.margin) ? 'margin: ' + props.margin : ''};
`;
FlexRow.displayName = 'FlexRow';
