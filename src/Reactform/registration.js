import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export let formData = {};

const RegistrationForm = () => {
  const [data, setData] = useState({
    name: '',
    email: '',
    phone: '',
    passport: '',
    travel: '',
    return: '',
    destination: '',
    reason: ''
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let formErrors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^[0-9]{10}$/;

    // Email validation
    if (!emailPattern.test(data.email)) {
      formErrors.email = 'Invalid email format';
    }

    // Phone number validation
    if (!phonePattern.test(data.phone)) {
      formErrors.phone = 'Phone number must be 10 digits';
    }

    // Return date validation
    if (data.travel && data.return && new Date(data.return) <= new Date(data.travel)) {
      formErrors.return = 'Return date must be after travel date';
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      formData = data;
      navigate('/submittedform');
    }
  };

  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        userSelect: 'none',
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          width: '300px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', margin: '10px 0' }}>
          <label style={{ marginBottom: '5px', letterSpacing: '1px' }} htmlFor="name">
            Name:
          </label>
          <input
            type="text"
            name="name"
            value={data.name}
            onChange={handleChange}
            required
            style={{
              width: '200px',
              height: '20px',
              paddingLeft: '10px',
              letterSpacing: '1px',
              border: '0.2px solid #00000090',
              borderRadius: '10px',
              outline: 'none',
            }}
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', margin: '10px 0' }}>
          <label style={{ marginBottom: '5px', letterSpacing: '1px' }} htmlFor="email">
            Email:
          </label>
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={handleChange}
            required
            style={{
              width: '200px',
              height: '20px',
              paddingLeft: '10px',
              letterSpacing: '1px',
              border: '0.2px solid #00000090',
              borderRadius: '10px',
              outline: 'none',
            }}
          />
          {errors.email && <span style={{ color: 'red', fontSize: '0.8rem' }}>{errors.email}</span>}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', margin: '10px 0' }}>
          <label style={{ marginBottom: '5px', letterSpacing: '1px' }} htmlFor="phone">
            Phone:
          </label>
          <input
            type="text"
            name="phone"
            value={data.phone}
            onChange={handleChange}
            required
            style={{
              width: '200px',
              height: '20px',
              paddingLeft: '10px',
              letterSpacing: '1px',
              border: '0.2px solid #00000090',
              borderRadius: '10px',
              outline: 'none',
            }}
          />
          {errors.phone && <span style={{ color: 'red', fontSize: '0.8rem' }}>{errors.phone}</span>}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', margin: '10px 0' }}>
          <label style={{ marginBottom: '5px', letterSpacing: '1px' }} htmlFor="passport">
            Passport:
          </label>
          <input
            type="text"
            name="passport"
            value={data.passport}
            onChange={handleChange}
            required
            style={{
              width: '200px',
              height: '20px',
              paddingLeft: '10px',
              letterSpacing: '1px',
              border: '0.2px solid #00000090',
              borderRadius: '10px',
              outline: 'none',
            }}
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', margin: '10px 0' }}>
          <label style={{ marginBottom: '5px', letterSpacing: '1px' }} htmlFor="travel">
            Travel Date:
          </label>
          <input
            type="date"
            name="travel"
            value={data.travel}
            onChange={handleChange}
            required
            style={{
              width: '200px',
              height: '20px',
              paddingLeft: '10px',
              letterSpacing: '1px',
              border: '0.2px solid #00000090',
              borderRadius: '10px',
              outline: 'none',
            }}
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', margin: '10px 0' }}>
          <label style={{ marginBottom: '5px', letterSpacing: '1px' }} htmlFor="return">
            Return Date:
          </label>
          <input
            type="date"
            name="return"
            value={data.return}
            onChange={handleChange}
            required
            style={{
              width: '200px',
              height: '20px',
              paddingLeft: '10px',
              letterSpacing: '1px',
              border: '0.2px solid #00000090',
              borderRadius: '10px',
              outline: 'none',
            }}
          />
          {errors.return && <span style={{ color: 'red', fontSize: '0.8rem' }}>{errors.return}</span>}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', margin: '10px 0' }}>
          <label style={{ marginBottom: '5px', letterSpacing: '1px' }} htmlFor="destination">
            Destination:
          </label>
          <input
            type="text"
            name="destination"
            value={data.destination}
            onChange={handleChange}
            required
            style={{
              width: '200px',
              height: '20px',
              paddingLeft: '10px',
              letterSpacing: '1px',
              border: '0.2px solid #00000090',
              borderRadius: '10px',
              outline: 'none',
            }}
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', margin: '10px 0' }}>
          <label style={{ marginBottom: '5px', letterSpacing: '1px' }} htmlFor="reason">
            Reason:
          </label>
          <input
            type="text"
            name="reason"
            value={data.reason}
            onChange={handleChange}
            required
            style={{
              width: '200px',
              height: '20px',
              paddingLeft: '10px',
              letterSpacing: '1px',
              border: '0.2px solid #00000090',
              borderRadius: '10px',
              outline: 'none',
            }}
          />
        </div>

        <button
          type="submit"
          style={{
            width: '120px',
            height: '25px',
            backgroundColor: '#000',
            color: '#fff',
            textAlign: 'center',
            letterSpacing: '1px',
            border: 'none',
            borderRadius: '10px',
            cursor: 'pointer',
            marginTop: '10px',
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;