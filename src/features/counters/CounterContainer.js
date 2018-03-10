import React from 'react';
import styled from 'styled-components';
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

export default class CountersContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            counters: [],
            totalCount: 0
        };
        this.addCounter = this.addCounter.bind(this);
        this.incrementCounter = this.incrementCounter.bind(this);
        this.decrementCounter = this.decrementCounter.bind(this);
        this.deleteCounter = this.deleteCounter.bind(this);
    }

    addCounter(title) {
        let counters = this.state.counters.slice();
        const id = counters.length;
        counters.push({id: id, title: title, count: 0},);
        const totalCount = this.calculateTotal(counters);
        this.setState({counters: counters, totalCount: totalCount});
    }

    calculateTotal(counters) {
        let totalCount = 0;
        counters.forEach((counter) => {
            totalCount += counter.count;
        });

        return totalCount;
    }

    incrementCounter(i) {
        let counters = this.state.counters.slice();
        counters.forEach((counter) => {
            if (counter.id === i) {
                counter.count += 1;
            }
        });
        const totalCount = this.calculateTotal(counters)
        this.setState({counters: counters, totalCount: totalCount})
    }

    decrementCounter(i) {
        let counters = this.state.counters.slice();
        counters.forEach((counter) => {
            if (counter.id === i) {
                counter.count -= 1;
            }
        });
        const totalCount = this.calculateTotal(counters);
        this.setState({counters: counters, totalCount: totalCount})
    }

    deleteCounter(i) {
        let counters = this.state.counters.slice();
        let countersCopy = this.state.counters.slice();
        countersCopy.forEach((counter, index) => {
            if (counter.id === i) {
                delete counters[index];
            }
        });

        const totalCount = this.calculateTotal(counters);
        this.setState({counters: counters, totalCount: totalCount})
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