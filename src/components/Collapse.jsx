import React from 'react';
import classNames from 'classnames';

class Collapse extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            opened: props.opened === undefined ? true : props.opened
        };
    }

    showText = () => {
        this.setState(() => ({opened: !this.state.opened}));
    };

    render() {
        const {text} = this.props;
        const {opened} = this.state;
        const collapseClasses = classNames('collapse', {
            'show': opened
        });
        return <div className="container">
            <div>
                <p>
                    <a onClick={this.showText} className="btn btn-primary" data-bs-toggle="collapse" href="#"
                       role="button"
                       aria-expanded={opened}>Link
                        with href</a>
                </p>
                <div className={collapseClasses}>
                    <div className="card card-body">
                        {text}
                    </div>
                </div>
            </div>
        </div>;
    }
}

export default Collapse;