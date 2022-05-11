import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_ADMIN } from '../utils/mutations';

import adminAuth from '../utils/adminAuth';

const LogAdmin = (props) => {
  const [formState, setFormState] = useState({ adminEmail: '', adminPassword: '' });
  const [adminLogin, { error, data }] = useMutation(LOGIN_ADMIN);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await adminLogin({
        variables: { ...formState },
      });
      console.log('The data is ', data);
      console.log('The data.login.token is ', data.adminlogin.token);
      adminAuth.adminLogin(data.adminlogin.token);
     
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      adminEmail: '',
      adminPassword: '',
    });
  };

  return (
    <main className="flex-row justify-center mb-4">
      <div className="col-12 col-lg-10">
        <div className="card">
          <h4 className="card-header bg-dark text-light p-2">Admin Login</h4>
          <div className="card-body">
            {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/admin">back to the admin page.</Link>
              </p>
            ) : (
              <form onSubmit={handleFormSubmit}>
                <input
                  className="form-input"
                  placeholder="Your email"
                  name="adminEmail"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                />
                <input
                  className="form-input"
                  placeholder="******"
                  name="adminPassword"
                  type="password"
                  value={formState.password}
                  onChange={handleChange}
                />
                <button
                  className="btn btn-block btn-primary"
                  style={{ cursor: 'pointer' }}
                  type="submit"
                >
                  Submit
                </button>
              </form>
            )}

            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default LogAdmin;
