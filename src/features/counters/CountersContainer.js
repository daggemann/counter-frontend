import React from 'react';
import * as Counter from './Counter';
import CountersComponent from './CountersComponent';

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
        return <CountersComponent
            counters={this.state.counters}
            totalCount={this.state.totalCount}
            addCounter={(title) => this.addCounter(title)}
            decrementCounter={(counterId) => this.decrementCounter(counterId)}
            incrementCounter={(counterId) => this.incrementCounter(counterId)}
            deleteCounter={(counterId) => this.deleteCounter(counterId)}
        />
    }
}