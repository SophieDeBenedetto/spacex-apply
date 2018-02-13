import React from 'react';

const SuccessMessage = ({ clearForm }) => {
  return (
    <div className="alert alert-dismissible alert-success">
      <button type="button" className="close" onClick={clearForm}>&times;</button>
      <strong>Thank you for your application!</strong>
      <p>Lots of really qualified SpaceEx members have applied.</p>
      <p>We'll let you know if you're one of the lucky nerds when we finish reviewing applications in 3-6 years.</p>
    </div>
  )
};

export default SuccessMessage;
