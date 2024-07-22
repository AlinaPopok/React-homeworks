import React from 'react';


class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                email: '',
                password: '',
                address: '',
                city: '',
                country: '',
                acceptRules: ''
            },
            submitted: false
        };
    }

    handleChange = (event) => {
        const formData = {
            ...this.state.formData,
            [event.target.name]: event.target.type === 'checkbox'
                ? String(event.target.checked)
                : event.target.value,
        };
        this.setState({formData});
    };

    handleBtn = (e) => {
        e.preventDefault();
        this.setState(({submitted}) => ({submitted: !submitted}));
    };

    renderTable = () => {
        return <div className="table-item mt-5">
            <button onClick={this.handleBtn} type="button" className="btn btn-primary">Back</button>
            <table className="table">
                <tbody>
                {Object.keys(this.state.formData)
                    .sort()
                    .filter(key => this.state.formData[key])
                    .map((key) => (
                    <tr key={key}>
                        <td>{key}</td>
                        <td>{this.state.formData[key]}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>;
    };

    renderForm = () => {
        return <form name="myForm">
            <div className="col-md-6 mb-3">
                <label htmlFor="email" className="col-form-label">Email</label>
                <input
                    value={this.state.formData.email}
                    onChange={this.handleChange}
                    type="email"
                    name="email"
                    className="form-control"
                    id="email"
                    placeholder="Email"/>
            </div>
            <div className="form-group col-md-6">
                <label htmlFor="password" className="col-form-label">Password</label>
                <input
                    value={this.state.formData.password}
                    onChange={this.handleChange}
                    type="password"
                    name="password"
                    className="form-control"
                    id="password"
                    placeholder="Password"/>
            </div>
            <div className="col-md-6 mb-3">
                <label htmlFor="address" className="col-form-label">Address</label>
                <textarea
                    value={this.state.formData.address}
                    onChange={this.handleChange}
                    type="text"
                    className="form-control"
                    name="address"
                    id="address"
                    placeholder="1234 Main St"></textarea>
            </div>
            <div className="col-md-6 mb-3">
                <label htmlFor="city" className="col-form-label">City</label>
                <input
                    value={this.state.formData.city}
                    onChange={this.handleChange}
                    type="text"
                    className="form-control"
                    name="city"
                    id="city"/>
            </div>
            <div className="col-md-6 mb-3">
                <label htmlFor="country" className="col-form-label">Country</label>
                <select
                    value={this.state.formData.country}
                    onChange={this.handleChange}
                    id="country"
                    name="country"
                    className="form-control">
                    <option>Choose</option>
                    <option value="argentina">Argentina</option>
                    <option value="ukraine">Ukraine</option>
                    <option value="china">China</option>
                </select>
            </div>
            <div className="col-md-6 mb-3">
                <div className="form-check">
                    <label className="form-check-label" htmlFor="acceptRules">
                        <input
                            checked={this.state.formData.acceptRules === 'true'}
                            onChange={this.handleChange}
                            id="acceptRules"
                            type="checkbox"
                            name="acceptRules"
                            className="form-check-input"/>
                        Accept Rules
                    </label>
                </div>
            </div>
            <button onClick={this.handleBtn} className="btn btn-primary">Sign in</button>
        </form>;
    };

    render() {
        return <div className="container">
            {this.state.submitted ? this.renderTable() : this.renderForm()}
        </div>;
    }
}

export default MyForm;