import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { ADD_GAUGE} from '../../utils/mutations';
//import { addTypenameToDocument } from '@apollo/client/utilities';

//import Auth from '../../utils/auth';

const GaugeForm = ({ gauges }) => {

 

  const [formState, setFormState] = useState({
    gaugeName: '',
    category: '',
    currentInventory: '',
  });


  const [addGauge, { error, data }] = useMutation(ADD_GAUGE);


  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addGauge({
        variables: { ...formState },
      });

      //Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  if (!gauges.length) {
    return <h3>No Gauges Yet</h3>;
  };



  return (
    <div className="flex-row justify-center mb-4">
      <div className="col-12 col-lg-10">
        <div className="card">
          <h4 className="card-header bg-dark text-light p-2">ADD NEW GAUGE</h4>
          <div className="card-body">
            {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
              <form onSubmit={handleFormSubmit}>
                <input
                  className="form-input"
                  placeholder="Gauge name"
                  name="gaugeName"
                  type="text"
                  value={formState.name}
                  onChange={handleChange}
                />
                <input
                  className="form-input"
                  placeholder="Category"
                  name="category"
                  type="ID"
                  value={formState.email}
                  onChange={handleChange}
                />
                <input
                  className="form-input"
                  placeholder="Qty"
                  name="currentInventory"
                  type="int"
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
        <div className='card'>
          <div>
            {gauges && gauges.map((gauge) => (
              <div key={gauge._id} className="card mb-3">
                <h4 className="card-header bg-primary text-light p-2 m-0">
                  {gauge.gauge_name}
                  <div>
                    {gauge.category.category_name} <br />
                  </div>
                </h4>
                <div className="card-body bg-light p-2">
                  <span style={{ fontSize: '1rem' }}>
                  </span>
                </div>
                {/* Create a link to this thought's page to view its comments using `<Link>` component */}
                <Link
                  className="btn btn-primary btn-block btn-squared"
                  to={`/gauges/${gauge._id}`}
                >
                  See details.
                </Link>
                <button >Edit</button>
                <button >Delete</button>
              </div>
            ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default GaugeForm;