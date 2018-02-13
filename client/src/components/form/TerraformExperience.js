import React from 'react';

class TerraformExperience extends React.Component {
  onChange = (e) => {
    this.props.onAttributeUpdate(
      { terraform_experience: e.target.checked }
    )
  };

  render() {
    const { disabled, terraformExperience } = this.props;

    return (
      <div className="form-group row">
        <label htmlFor="terraform_experience" className="col-sm-2 col-form-label">Terraforming Experience</label>
        <input
          disabled={disabled}
          type="checkbox"
          className="col-sm-6 form-control"
          id="terraform_experience"
          onChange={this.onChange}
          checked={terraformExperience}/>
      </div>
    )
  }
};

export default TerraformExperience;
