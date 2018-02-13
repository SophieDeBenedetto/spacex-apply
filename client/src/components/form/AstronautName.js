import React from 'react';

class AstronautName extends React.Component {
  state = {
    name: ""
  };

  componentWillReceiveProps(nextProps) {
    this.setState({name: nextProps.name});
  }

  onChange = (e) => {
    this.setState({name: e.target.value})
  };

  onBlur = (e) => {
    this.props.onAttributeUpdate(
      { name: this.state.name }
    )
  }

  render() {
    const { nameError, disabled } = this.props;
    const { name } = this.state;
    return (
      <div className="form-group row">
        <label htmlFor="name" className="col-sm-2 col-form-label">Name</label>
        <input
          disabled={disabled}
          required
          type="text"
          className={`col-sm-6 form-control ${nameError ? "is-invalid" : ""}`}
          id="name"
          onBlur={this.onBlur}
          onChange={this.onChange}
          value={name}/>
          {nameError && <div className="invalid-feedback invalid-name">please tell me your name.</div>}
      </div>
    )
  }
};

export default AstronautName;
