import React from 'react';


class Definitions extends React.Component {

    render() {
        const {arr} = this.props;
        const items = arr.map(item => <React.Fragment key={item.id}>
            <dt>{item.dt}</dt>
            <dd>{item.dd}</dd>
        </React.Fragment>);

        return <dl>{items}</dl>;
    }
}

export default Definitions;

