export class Counter {
    constructor(id, title, count) {
        this.id = id;
        this.title = title;
        this.count = count;
    }

    delete() {
        delete counters[this.id]
    }
}

let counters = [
    new Counter(1, "test", 1),
    new Counter(2, "test", 1),
    new Counter(3, "test", 1),
];


export function getAll() {
    return new Promise((resolve, reject) => {
        (true) ? setTimeout(resolve(counters.slice()), 3) : reject('never gonna happen')
    });
}

export function add(title) {
    counters.push(new Counter(4, "test", 1));
    return new Promise((resolve, reject) => {
        (true) ? setTimeout(resolve(counters.slice()), 3) : reject('never gonna happen')
    });
}

export function totalCount(counters) {
    let totalCount = 0;
    counters.forEach((counter) => {
        totalCount += counter.count;
    });
    return totalCount;
}

