import React from 'react';
import styled from 'styled-components';
import NewCounterComponent from './NewCounterContainer';
import TotalCountComponent from './TotalCountComponent';
import CounterComponent from './CounterComponent';
import * as Counter from "./Counter";

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
        Counter.getAll()
            .then((counters) => {
                const totalCount = Counter.totalCount(counters);
                this.setState({counters: counters, totalCount: totalCount})
            })
            .catch((err) => {
                console.log(err);
                this.setState({counters: [], totalCount: 0})
            });
    }

    addCounter(title) {

        Counter.add(title)
            .then((counters) => {
                const totalCount = Counter.totalCount(counters);
                this.setState({counters: counters, totalCount: totalCount})
            })
            .catch((err) => {
                console.log(err);
            });
    }

    incrementCounter(id) {
        const counters = this.state.counters.slice();
        counters.forEach((counter) => {
            if (counter.id === id) {
                counter.increment()
                    .then((counters) => {
                        const totalCount = Counter.totalCount(counters);
                        this.setState({counters: counters, totalCount: totalCount})
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            }
        })
    }

    decrementCounter(id) {
        const counters = this.state.counters.slice();
        counters.forEach((counter) => {
            if (counter.id === id) {
                counter.decrement()
                    .then((counters) => {
                        const totalCount = Counter.totalCount(counters);
                        this.setState({counters: counters, totalCount: totalCount})
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            }
        })
    }

    deleteCounter(id) {
        const counters = this.state.counters.slice();
        counters.forEach((counter) => {
            if (counter.id === id) {
                counter.delete()
                    .then((counters) => {
                        const totalCount = Counter.totalCount(counters);
                        this.setState({counters: counters, totalCount: totalCount})
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            }
        })
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