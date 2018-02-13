import React from 'react';

class TerraformPlanets extends React.Component {
  state = {
    terraformPlanets: ""
  };

  componentWillReceiveProps(nextProps) {
    this.setState({terraformPlanets: nextProps.terraformPlanets})
  };

  onBlur = (e) => {
    this.props.onAttributeUpdate(
      { terraform_planets: this.state.terraformPlanets }
    )
  };

  onChange = (e) => {
    this.setState({terraformPlanets: e.target.value})
  };

  render() {
    const { terraformExperience, terraformError } = this.props;
    const { terraformPlanets } = this.state;
    return (
      <div className="form-group row">
        <label htmlFor="terraform_planet" className="col-sm-2 col-form-label">
          Please list all the planets you terraformed
          <span className="text-info">*</span>
          <br/>
          <small className="text-info">*do not include Mars</small>
        </label>
        <input
          type="text"
          className={`col-sm-6 form-control ${terraformError && terraformExperience ? "is-invalid" : ""}`}
          id="name"
          onChange={this.onChange}
          onBlur={this.onBlur}
          disabled={terraformExperience ? false : true}
          value={terraformExperience ? terraformPlanets : ""}/>
          {terraformError && terraformExperience && <div className="invalid-planet invalid-feedback">please provide a valid list of terraformed planets, NOT including Mars.</div>}
      </div>
    )
  }
};

export default TerraformPlanets;
