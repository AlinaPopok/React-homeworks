import React from 'react';
class Card extends React.Component {

    render() {
        const {tittleText} = this.props;
        const {pText} = this.props;
        return <div className="card">
            <div className="card-body">
                {tittleText ? <h4 className="card-title">{tittleText}</h4> : null}
                {pText ?  <p className="card-text">{pText}</p> : null}
            </div>
        </div>
    }
}

export default Card;