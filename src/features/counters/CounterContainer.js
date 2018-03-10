import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import NewCounterComponent from './NewCounterComponent';
import TotalCountComponent from './TotalCountComponent';
import CounterComponent from './CounterComponent';

const Rows = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px
    padding: 5px;
    width: 300px;
`;

const HorizontalLine = styled.div`
    margin-top: 20px;
    border-bottom: 1px dashed gray;
    margin-bottom: 20px;
`;

export default class CounterContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            counters: [],
            totalCount: 0,
        };

        // Bind methods that will be pass down as props.
        this.addCounter = this.addCounter.bind(this);
        this.incrementCounter = this.incrementCounter.bind(this);
        this.decrementCounter = this.decrementCounter.bind(this);
        this.deleteCounter = this.deleteCounter.bind(this);
    }

    componentWillMount() {
        this.setInitialCounterState();
    }

    setInitialCounterState() {
        axios.get('http://localhost:5000/counters')
            .then(res => {
                const counters = res.data.slice();
                const totalCount = this.calculateTotal(counters);
                this.setState({counters: counters, totalCount: totalCount})
            })
            .catch(err => console.log(err))

    }

    addCounter(title) {
        const data = {title: title};
        axios.post('http://localhost:5000/counters', data)
            .then(res => {
                const counters = res.data.slice();
                const totalCount = this.calculateTotal(counters);
                this.setState({counters: counters, totalCount: totalCount})
            })
            .catch(err => console.log(err))
    }

    calculateTotal(counters) {
        let totalCount = 0;
        counters.forEach((counter) => {
            totalCount += counter.count;
        });

        return totalCount;
    }

    incrementCounter(id) {
        axios.post(`http://localhost:5000/counters/${id}/increment`)
            .then(res => {
                const counters = res.data.slice();
                const totalCount = this.calculateTotal(counters);
                this.setState({counters: counters, totalCount: totalCount})
            })
            .catch(err => console.log(err))
    }

    decrementCounter(id) {
        axios.post(`http://localhost:5000/counters/${id}/decrement`)
            .then(res => {
                const counters = res.data.slice();
                const totalCount = this.calculateTotal(counters);
                this.setState({counters: counters, totalCount: totalCount})
            })
            .catch(err => console.log(err))
    }

    deleteCounter(id) {
        axios.delete(`http://localhost:5000/counters/${id}`)
            .then(res => {
                const counters = res.data.slice();
                const totalCount = this.calculateTotal(counters);
                this.setState({counters: counters, totalCount: totalCount})
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <Rows>
                <NewCounterComponent
                    onClick={(title) => this.addCounter(title)}
                />
                <HorizontalLine/>

                {this.state.counters.map((counter) => {
                    return <CounterComponent
                        key={counter.id}
                        counter={counter}
                        decr={(i) => this.decrementCounter(i)}
                        incr={(i) => this.incrementCounter(i)}
                        delete={(i) => this.deleteCounter(i)}
                    />
                })}

                <HorizontalLine/>
                <TotalCountComponent total={this.state.totalCount}/>
            </Rows>
        )
    }
}