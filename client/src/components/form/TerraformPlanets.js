import React from 'react';

class TerraformPlanets extends React.Component {
  onChange = (e) => {
    this.props.onAttributeUpdate(
      { terraform_planets: e.target.value },
      { shouldValidate: true }
    )
  };

  render() {
    const { terraformPlanets, terraformExperience, terraformError } = this.props;
    return (
      <div className="form-group row">
        <label htmlFor="terraform_planet" className="col-sm-2 col-form-label">Please list all the planets you terraformed</label>
        <input
          type="text"
          className={`col-sm-6 form-control ${terraformError ? "is-invalid" : ""}`}
          id="name"
          onChange={this.onChange}
          disabled={terraformExperience ? false : true}
          value={terraformExperience ? terraformPlanets : ""}/>
          {terraformError && <div className="invalid-planet invalid-feedback">please provide a valid list of terraformed planets, NOT including Mars.</div>}
      </div>
    )
  }
};

export default TerraformPlanets;
