import React from 'react';
import {Children} from 'react';


class ListGroup extends React.Component {
    render() {
        const children = this.props.children;
        return <div className="container">
            <ul className="list-group">
                {Children.map(children, child => <li className="list-group-item">{child}</li>)}
            </ul>
        </div>;
    }
}

export default ListGroup;