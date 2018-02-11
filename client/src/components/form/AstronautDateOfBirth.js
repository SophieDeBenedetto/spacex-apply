import React from 'react';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

class AstronautDateOfBirth extends React.Component {
  onChange = (date) => {
    this.props.onAttributeUpdate({ date_of_birth: date })
  };

  formatDate(date) {
    if (!date._isAMomentObject) {
      return moment(date)
    }
    return date;
  }

  render() {
    const { dateOfBirth, dateOfBirthError } = this.props;
    return (
      <div className="form-group row">
        <label htmlFor="dateOfBirth" className="col-sm-2 col-form-label">Date of Birth</label>
        <DatePicker
          required
          className={`col-sm-8 form-control ${dateOfBirthError ? "is-invalid" : ""}`}
          selected={this.formatDate(dateOfBirth || moment())}
          onChange={this.onChange}/>
          {dateOfBirthError && <div className="invalid">please tell me your birthday.</div>}
      </div>
    )
  }
};

export default AstronautDateOfBirth;
