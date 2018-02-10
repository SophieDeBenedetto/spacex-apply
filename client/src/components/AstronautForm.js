import React                  from 'react';
import { Form, Button}        from 'react-bootstrap'
import { connect }            from 'react-redux';
import { bindActionCreators } from 'redux';
import * as astronautActions  from "../actions/astronautActions";
import AstronautName          from './form/AstronautName';
// import AstronautHeight from './form/AstronautHeight';
// import AstronautWeight from './form/AstronautWeight';

class AstronautForm extends React.Component {
  submitForm = (e) => {
    e.preventDefault();
    this.props.actions.saveAstronaut(this.props.astronaut);
  };

  updateAstronautAttributes = (newAttributes) => {
    this.props.actions.updateAstronautAttributes(newAttributes)
  };

  render() {
    return (
      <Form onSubmit={this.submitForm}>
        <fieldset>
        <AstronautName
          name={this.props.astronaut.name}
          nameError={this.props.astronaut.errors.name}
          onAttributeUpdate={this.updateAstronautAttributes} />
        </fieldset>
        <Button type="submit">Submit</Button>
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

