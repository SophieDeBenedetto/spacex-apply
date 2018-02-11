import React                  from 'react';
import { Form, Button}        from 'react-bootstrap'
import { connect }            from 'react-redux';
import { bindActionCreators } from 'redux';
import * as astronautActions  from "../actions/astronautActions";
import AstronautName          from './form/AstronautName';
import AstronautDateOfBirth   from './form/AstronautDateOfBirth';
import TerraformExperience    from './form/TerraformExperience';
import TerraformPlanet        from './form/TerraformPlanet';

class AstronautForm extends React.Component {
  submitForm = (e) => {
    e.preventDefault();
    this.props.actions.saveAstronaut(this.props.astronaut);
  };

  updateAstronautAttributes = (newAttributes) => {
    this.props.actions.updateAstronautAttributes(newAttributes)
  };

  render() {
    const { name, date_of_birth, errors, terraform_experience, terraform_planet } = this.props.astronaut;
    return (
      <Form onSubmit={this.submitForm}>
        <fieldset>
          <AstronautName
            name={name}
            nameError={errors.name}
            onAttributeUpdate={this.updateAstronautAttributes} />
          <AstronautDateOfBirth
            dateOfBirth={date_of_birth}
            dateOfBirthError={errors.date_of_birth}
            onAttributeUpdate={this.updateAstronautAttributes} />
          <TerraformExperience
            terraformExperience={terraform_experience}
            terraformExperienceError={errors.terraform_experience}
            onAttributeUpdate={this.updateAstronautAttributes}/>
          <TerraformPlanet
            terraformPlanet={terraform_planet}
            terraformError={errors.terraform_planet}
            onAttributeUpdate={this.updateAstronautAttributes}/>
        </fieldset>
        <fieldset className="form-group">
          <Button className="btn btn-info submit" type="submit">Submit</Button>
        </fieldset>
      </Form>
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

