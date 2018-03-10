import React from 'react';
import styled from 'styled-components';

const NewCounterComponent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    ${props => (props.width) ? 'width: ' + props.width : ''};
    ${props => (props.height) ? 'height: ' + props.height : ''};
`;

const Input = styled.input`
    border-top: 0px solid gray;
    border-right: 0px solid gray;
    border-bottom: 1px solid gray;
    border-left: 0px solid gray;
`;

const AddButton = styled.button`
    border: 1px solid gray;
    border-radius: 1em 1em 1em 1em;
    width: 100px;
    
    &:hover {
        background-color: #2ECC40;
    }
`;

export default class NewCounterContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.addCounter = this.addCounter.bind(this);
    }

    handleChange(e) {
        this.setState({title: e.target.value});
    }

    addCounter() {
        if (this.state.title.length === 0) {
            return
        }
        this.props.onClick(this.state.title);
        this.setState({title: ''})
    }

    render() {
        return (
            <NewCounterComponent width={'300px'} height={'30px'}>
                <Input
                    type='text'
                    placeholder='Counter title'
                    value={this.state.title}
                    onChange={this.handleChange}
                    size={15}
                />
                <AddButton onClick={this.addCounter}>Add</AddButton>
            </NewCounterComponent>
        )
    }
}