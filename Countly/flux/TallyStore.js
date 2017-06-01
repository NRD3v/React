import Dispatcher from "./Dispatcher";
import EventEmitter from 'EventEmitter';

const tally = {
    count: 0
};
const increment = () => {
    tally.count++;
};
const decrement = () => {
    tally.count--;
};
const zero = () => {
    tally.count = 0;
};
const handleAction = (action) => {
    switch (action.type) {
        case "INCREMENT":
            increment();
            break;
        case "DECREMENT":
            decrement();
            break;
        case "ZERO":
            zero();
            break;
    }
    TallyStoreInstance.emitChanges();
};
Dispatcher.register(handleAction);

class TallyStore extends EventEmitter {
    getTally() {
        return Object.assign({}, tally);
    };
    addChangeListener(callback) {
        this.addListener("CHANGE", callback);
    }
    removeChangeListener(callback) {
        this.removeListener("CHANGE", callback)
    }
    emitChanges() {
        this.emit("CHANGE")
    }
}
const TallyStoreInstance = new TallyStore();
export default TallyStoreInstance;
