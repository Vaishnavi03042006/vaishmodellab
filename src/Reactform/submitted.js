import React from 'react';
import { formData } from './registration';

const SubmittedForm = () => {
  return (
    <div>
      <h2>Submitted Form Data</h2>
      <p><strong>Name:</strong> {formData.name}</p>
      <p><strong>Email:</strong> {formData.email}</p>
      <p><strong>Phone:</strong> {formData.phone}</p>
      <p><strong>Passport:</strong> {formData.passport}</p>
      <p><strong>Travel Date:</strong> {formData.travel}</p>
      <p><strong>Return Date:</strong> {formData.return}</p>
      <p><strong>Destination:</strong> {formData.destination}</p>
      <p><strong>Reason:</strong> {formData.reason}</p>
    </div>
  );
};

export default SubmittedForm;