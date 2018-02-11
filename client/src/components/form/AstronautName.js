import React from 'react';

class AstronautName extends React.Component {
  onChange = (e) => {
    this.props.onAttributeUpdate({ name: e.target.value })
  };

  render() {
    const { name, nameError } = this.props;
    return (
      <div className="form-group row">
        <label htmlFor="name" className="col-sm-2 col-form-label">Name</label>
        <input
          required
          type="text"
          className={`col-sm-6 form-control ${nameError ? "is-invalid" : ""}`}
          id="name"
          onChange={this.onChange}
          value={name}/>
          {nameError && <div className="invalid-feedback">please tell me your name.</div>}
      </div>
    )
  }
};

export default AstronautName;
