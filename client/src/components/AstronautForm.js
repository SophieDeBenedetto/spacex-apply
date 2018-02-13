import React                  from 'react';
import { Form, Button}        from 'react-bootstrap'
import { connect }            from 'react-redux';
import { bindActionCreators } from 'redux';
import * as astronautActions  from '../actions/astronautActions';
import AstronautName          from './form/AstronautName';
import AstronautEmail         from './form/AstronautEmail';
import TerraformExperience    from './form/TerraformExperience';
import TerraformPlanets       from './form/TerraformPlanets';
import SuccessMessage         from './SuccessMessage';

class AstronautForm extends React.Component {
  submitForm = (e) => {
    e.preventDefault();
    this.props.actions.saveAstronaut(this.props.astronaut);
  };

  updateAstronautAttributes = (newAttributes) => {
    this.props.actions.updateAstronautAttributes(newAttributes)
  };

  clearForm = (e) => {
    this.props.actions.clearAstronaut();
  };

  render() {
    const {
      id, name, email,
      errors, terraform_experience,
      terraform_planets } = this.props.astronaut;
    return (
      <div>
        {id &&
          <SuccessMessage closeForm={this.closeForm} />
        }
        <Form key="astronaut-form" onSubmit={this.submitForm}>
          <fieldset>
            <AstronautName
              disabled={id}
              name={name}
              nameError={errors.name}
              onAttributeUpdate={this.updateAstronautAttributes} />
            <AstronautEmail
              disabled={id}
              email={email}
              emailError={errors.email}
              onAttributeUpdate={this.updateAstronautAttributes} />
            <TerraformExperience
              disabled={id}
              terraformExperience={terraform_experience}
              terraformExperienceError={errors.terraform_experience}
              onAttributeUpdate={this.updateAstronautAttributes}/>
            <TerraformPlanets
              disabled={id}
              terraformExperience={terraform_experience}
              terraformPlanets={terraform_planets}
              terraformError={errors.terraform_planets}
              onAttributeUpdate={this.updateAstronautAttributes}/>
          </fieldset>
          <fieldset className="form-group">
            <Button
              className="btn btn-info submit"
              type="submit">Submit
            </Button>
            <Button
              className="btn btn-outline-primary"
              onClick={this.clearForm}>
              Clear
            </Button>
          </fieldset>
        </Form>
      </div>
    )
  }
}

function mapStateToProps(storeState, componentProps) {
  const { astronaut } = storeState;
  return { astronaut };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(astronautActions, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(AstronautForm);

