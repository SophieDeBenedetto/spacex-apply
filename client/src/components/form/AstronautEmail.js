import React from 'react';

class AstronautEmail extends React.Component {
  state = {
    email: ""
  };

  componentWillReceiveProps(nextProps) {
    this.setState({email: nextProps.email})
  }

  onBlur = (e) => {
    this.props.onAttributeUpdate(
      { email: this.state.email }
    )
  };

  onChange = (e) => {
    this.setState({email: e.target.value})
  }

  render() {
    const { disabled, emailError } = this.props;
    const { email } = this.state;
    return (
      <div className="form-group row">
        <label htmlFor="email" className="col-sm-2 col-form-label">SpaceEx Email</label>
        <input
          disabled={disabled}
          required
          className={`col-sm-6 form-control ${emailError ? "is-invalid" : ""}`}
          type="email"
          value={email}
          onChange={this.onChange}
          onBlur={this.onBlur} />
          {emailError && <div className="invalid-feedback invalid-email">please provide a valid SpaceEx email.</div>}
      </div>
    )
  }
};

export default AstronautEmail;
