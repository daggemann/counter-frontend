import styled from 'styled-components';

export const FlexRow = styled.div`
    display: flex;
    flex-direction: row;
    ${props => (props.width) ? 'width: ' + props.width : ''};
    ${props => (props.height) ? 'height: ' + props.height : ''};
    ${props => (props.justifyContent) ? 'justify-content: ' + props.justifyContent : ''};
    ${props => (props.margin) ? 'margin: ' + props.margin : ''};
`;
FlexRow.displayName = 'FlexRow';

export const Input = styled.input`
    ${props => (props.border) ? 'border: ' + props.border : ''};
    ${props => (props.borderWidth) ? 'border-width: ' + props.borderWidth : ''};
    ${props => (props.borderStyle) ? 'border-style: ' + props.borderStyle : ''};
    ${props => (props.borderColor) ? 'border-color: ' + props.borderColor : ''};
`;
Input.displayName = 'Input';

export const Button = styled.button`
    ${props => (props.border) ? 'border: ' + props.border : ''};
    ${props => (props.borderRadius) ? 'border-radius: ' + props.borderRadius : ''};
    ${props => (props.width) ? 'width: ' + props.width : ''};
    ${props => (props.backgroundColor) ? 'background-color: ' + props.backgroundColor : ''};
    ${props => (props.margin) ? 'margin: ' + props.margin : ''};
    

`;
Button.displayName = 'Button';

