import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL + '/counters';

export class Counter {

    constructor(id, title, count) {
        this._id = id;
        this._title = title;
        this._count = count;
    }

    get id() {
        return this._id;
    }

    set id(id) {
        this._id = id;
    }

    get title() {
        return this._title;
    }

    set title(title) {
        this._title = title;
    }

    get count() {
        return this._count;
    }

    set count(count) {
        this._count = count;
    }

    increment() {
        return new Promise( (resolve, reject) => {
            axios.post(API_URL + `/${this._id}/increment`, {})
                .then(res => {
                    const counters = res.data.map( (counter) => {
                        return new Counter(counter.id, counter.title, counter.count);
                    });
                    resolve(counters);
                })
                .catch(err => {
                    reject(err)
                })
        })
    }

    delete() {
        return new Promise( (resolve, reject) => {
            axios.delete(API_URL + `/${this._id}`)
                .then(res => {
                    const counters = res.data.map( (counter) => {
                        return new Counter(counter.id, counter.title, counter.count);
                    });
                    resolve(counters);
                })
                .catch(err => {
                    reject(err)
                })
        })
    }

    decrement() {
        return new Promise( (resolve, reject) => {
            axios.post(API_URL + `/${this._id}/decrement`, {})
                .then(res => {
                    const counters = res.data.map( (counter) => {
                        return new Counter(counter.id, counter.title, counter.count);
                    });
                    resolve(counters);
                })
                .catch(err => {
                    reject(err)
                })
        })
    }
}


export function totalCount(counters) {
    let totalCount = 0;
    counters.forEach((counter) => {
        totalCount += counter.count;
    });
    return totalCount;
}

export function getAll() {
    return new Promise((resolve, reject) => {
        axios.get(API_URL)
            .then(res => {
                const counters = res.data.map( (counter) => {
                    return new Counter(counter.id, counter.title, counter.count);
                });
                resolve(counters);
            })
            .catch(err => {
                reject(err)
            })

    })
}

export function add(title) {
    return new Promise( (resolve, reject) => {
        axios.post(API_URL, {title: title})
            .then(res => {
                const counters = res.data.map( (counter) => {
                    return new Counter(counter.id, counter.title, counter.count);
                });
                resolve(counters);
            })
            .catch(err => {
                reject(err)
            })
    })
}

export function incrementCounter(id) {
    return new Promise( (resolve, reject) => {
        axios.post(API_URL + `/${id}/increment`, {})
            .then(res => {
                const counters = res.data.map( (counter) => {
                    return new Counter(counter.id, counter.title, counter.count);
                });
                resolve(counters);
            })
            .catch(err => {
                reject(err)
            })
    })
}

export function decrementCounter(id) {
    return new Promise( (resolve, reject) => {
        axios.post(API_URL + `/${id}/decrement`, {})
            .then(res => {
                const counters = res.data.map( (counter) => {
                    return new Counter(counter.id, counter.title, counter.count);
                });
                resolve(counters);
            })
            .catch(err => {
                reject(err)
            })
    })
}

export function deleteCounter(id) {
    return new Promise( (resolve, reject) => {
        axios.delete(API_URL + `/${id}`)
            .then(res => {
                const counters = res.data.map( (counter) => {
                    return new Counter(counter.id, counter.title, counter.count);
                });
                resolve(counters);
            })
            .catch(err => {
                reject(err)
            })
    })
}
