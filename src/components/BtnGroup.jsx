import React from 'react';
import classNames from 'classnames';

class BtnGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentActiveBtn: ''
        };
    }

    handleClick = (value) => {
        this.setState(() => ({currentActiveBtn: value}));
    };

    render() {
        const leftBtnClass = classNames([
            'btn',
            this.state.currentActiveBtn === 'left' ? 'btn-primary' : 'btn-secondary'
        ]);
        const middleBtnClass = classNames([
            'btn',
            this.state.currentActiveBtn === 'middle' ? 'btn-primary' : 'btn-secondary'
        ]);
        const rightBtnClass = classNames([
            'btn',
            this.state.currentActiveBtn === 'right' ? 'btn-primary' : 'btn-secondary'
        ]);

        return <div className="container">
            <h1>Choose one</h1>
            <div className="btn-group">
                <button onClick={() => {
                    this.handleClick('left');
                }} type="button" className={leftBtnClass}>Left
                </button>
                <button onClick={() => {
                    this.handleClick('middle');
                }} type="button" className={middleBtnClass}>Middle
                </button>
                <button onClick={() => {
                    this.handleClick('right');
                }} type="button" className={rightBtnClass}>Right
                </button>
            </div>
        </div>;
    }
}

export default BtnGroup;