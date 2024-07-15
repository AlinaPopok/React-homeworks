import React from 'react';
import classNames from 'classnames';

class Alert extends React.Component {
    render() {
        const {text} = this.props;
        const {primary, secondary, success, danger, warning, info, light, dark} = this.props;
        const type = classNames('alert', {
            'alert-primary': primary,
            'alert-secondary': secondary,
            'alert-success': success,
            'alert-danger': danger,
            'alert-warning': warning,
            'alert-info': info,
            'alert-light': light,
            'alert-dark': dark,
        });
        return <div className={type} role="alert">{text}</div>;
    }
}
Alert.defaultProps = {
    text: 'Hello, world!',
};
export default Alert;