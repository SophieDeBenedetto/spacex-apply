import React from 'react';

class TerraformExperience extends React.Component {
  onChange = (e) => {
    this.props.onAttributeUpdate({ terraform_experience: !this.props.terraformExperience })
  };

  render() {
    const { terraformExperience, TerraformExperienceError } = this.props;
    return (
      <div className="form-group row">
        <label htmlFor="terraform_experience" className="col-sm-2 col-form-label">Terraform Epxerience</label>
        <input
          type="checkbox"
          className={`col-sm-6 form-control ${TerraformExperienceError ? "is-invalid" : ""}`}
          id="terraform_experience"
          onChange={this.onChange}
          value={terraformExperience}/>
      </div>
    )
  }
};

export default TerraformExperience;
