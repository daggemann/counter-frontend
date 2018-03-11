import React from 'react';
import {Button, FlexRow, Input} from "../../commons/styled-components";

const AddButton = Button.extend`
    &:hover {
        background-color: #2ECC40;
    }
`;
AddButton.displayName = 'AddButton';

export default class AddCounterContainer extends React.Component {
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
            <FlexRow justifyContent='space-between' width={'300px'} height={'30px'}>
                <Input
                    borderWidth='0px 0px 1px 0px'
                    borderStyle='solid'
                    borderColor='gray'
                    type='text'
                    placeholder='Counter title'
                    value={this.state.title}
                    onChange={this.handleChange}
                    size={15}
                />
                <AddButton
                    border='1px solid gray'
                    borderRadius='1em'
                    width='100px'
                    onClick={this.addCounter}
                >
                    Add
                </AddButton>
            </FlexRow>
        )
    }
}