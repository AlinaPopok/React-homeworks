import React from 'react';

class Component extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            currentId: 0,
            events: []
        };
    }

    countPlus = () => {
        this.setState(({count, currentId, events}) => (
            {
                count: ++count,
                currentId: ++currentId,
                events: [...events, {id: currentId, value: count}]
            }));
    };

    countMinus = () => {
        this.setState(({count, currentId, events}) => (
            {
                count: --count,
                currentId: ++currentId,
                events: [...events, {id: currentId, value: count}]
            }));
    };

    removeEvent = (id) => {
        this.setState(({events}) => ({events: events.filter((event) => event.id !== id)}));
    };

    render() {
        const {events} = this.state;
        return <div className="container mt-5">
            <div className="btn-group font-monospace" role="group">
                <button onClick={this.countPlus} type="button" className="btn btn-outline-success">+</button>
                <button onClick={this.countMinus} type="button" className="btn btn-outline-danger">-</button>
            </div>
            <div className="list-group">
                {events.map((event) => (
                    <button onClick={() => this.removeEvent(event.id)}
                            key={event.id}
                            type="button"
                            className="list-group-item list-group-item-action">{event.value}</button>))}
            </div>
        </div>;
    }
}

export default Component;