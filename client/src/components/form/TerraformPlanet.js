import React from 'react';

class TerraformPlanet extends React.Component {
  onChange = (e) => {
    this.props.onAttributeUpdate({ terraform_planet: e.target.value })
  };

  render() {
    const { terraformPlanet, terraformError } = this.props;
    return (
      <div className="form-group row">
        <label htmlFor="terraform_planet" className="col-sm-2 col-form-label">Planet</label>
        <input
          type="text"
          className={`col-sm-6 form-control ${terraformError ? "is-invalid" : ""}`}
          id="name"
          onChange={this.onChange}
          value={terraformPlanet}/>
          {terraformError && <div className="invalid-planet invalid-feedback">what planet did you terraform?</div>}
      </div>
    )
  }
};

export default TerraformPlanet;
